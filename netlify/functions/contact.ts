import nodemailer from "nodemailer";

/**
 * POST /.netlify/functions/contact
 * Emails a contact-form message to the site owner. The visitor's address is set as Reply-To,
 * so answering is a normal "Reply" in Gmail. Nothing is ever sent to the visitor's address,
 * which keeps the form from being usable to send mail to third parties.
 *
 * Env: GMAIL_USER, GMAIL_APP_PASSWORD (a Google app password), optional CONTACT_TO.
 */

const LIMITS = { name: 100, email: 200, subject: 150, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

// Strip CR/LF so user input can never inject extra mail headers via the subject or name.
const oneLine = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

export default async (req: Request) => {
  if (req.method !== "POST") return json(405, { error: "Method not allowed" });

  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return json(400, { error: "Invalid request body" });
  }

  // Honeypot: real visitors never see or fill this field. Pretend success so bots learn nothing.
  if (typeof payload.company === "string" && payload.company.trim() !== "") return json(200, { ok: true });

  const field = (key: keyof typeof LIMITS) => (typeof payload[key] === "string" ? (payload[key] as string).trim() : "");
  const name = oneLine(field("name"));
  const email = oneLine(field("email"));
  const subject = oneLine(field("subject"));
  const message = field("message");

  if (!name || !email || !subject || !message) return json(400, { error: "Please fill in every field." });
  if (!EMAIL_RE.test(email)) return json(400, { error: "Please enter a valid email address." });
  for (const key of Object.keys(LIMITS) as (keyof typeof LIMITS)[]) {
    if (field(key).length > LIMITS[key]) return json(400, { error: `Your ${key} is too long.` });
  }

  const user = process.env.GMAIL_USER;
  // Google shows app passwords in groups of four; spaces are not part of the password.
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
  const to = process.env.CONTACT_TO || "ishitatwal20@gmail.com";
  if (!user || !pass) {
    console.error("contact: GMAIL_USER / GMAIL_APP_PASSWORD are not set");
    return json(500, { error: "Email is not configured on the server yet." });
  }

  const transporter = nodemailer.createTransport({ service: "gmail", auth: { user, pass } });

  try {
    await transporter.sendMail({
      from: `"Portfolio contact" <${user}>`,
      to,
      replyTo: { name, address: email },
      subject: `[Portfolio] ${subject}`,
      text: `New message from your portfolio\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}\n\n— Reply to this email to answer ${name} directly.`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;color:#111827">
          <h2 style="margin:0 0 12px;font-size:18px">New message from your portfolio</h2>
          <table style="border-collapse:collapse;font-size:14px;margin-bottom:16px">
            <tr><td style="padding:4px 12px 4px 0;color:#6b7280">Name</td><td style="padding:4px 0"><strong>${escapeHtml(name)}</strong></td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#6b7280">Email</td><td style="padding:4px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#6b7280">Subject</td><td style="padding:4px 0">${escapeHtml(subject)}</td></tr>
          </table>
          <div style="white-space:pre-wrap;font-size:14px;line-height:1.6;padding:16px;background:#f3f4f6;border-radius:8px">${escapeHtml(message)}</div>
          <p style="font-size:12px;color:#6b7280;margin-top:16px">Hit <strong>Reply</strong> to answer ${escapeHtml(name)} directly.</p>
        </div>`,
    });
    return json(200, { ok: true });
  } catch (error) {
    console.error("contact: sendMail failed", error);
    return json(502, { error: "Could not send your message right now." });
  }
};
