import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowUpRight, Check, Github, Linkedin, Loader2, Mail, Phone, Send } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { profile } from "@/lib/profile";

type Status = { state: "idle" | "sending" | "sent" } | { state: "error"; message: string };

// Max lengths mirror the limits enforced by netlify/functions/contact.ts.
const fields = [
  { name: "name", label: "Name", placeholder: "Your name", maxLength: 100, half: true },
  { name: "email", label: "Email", placeholder: "you@example.com", maxLength: 200, half: true, type: "email" },
  { name: "subject", label: "Subject", placeholder: "What are you building?", maxLength: 150 },
  { name: "message", label: "Message", placeholder: "Tell me a little about the opportunity or project...", maxLength: 5000, multiline: true },
] as const;

const inputClass =
  "w-full rounded-md border border-white/10 bg-black/20 px-3 text-sm text-white placeholder:text-white/28 outline-none transition-shadow focus-visible:border-brand-sky/60 focus-visible:shadow-[0_0_0_4px_hsl(var(--brand-sky)/0.15)]";

const contactCard = "spotlight-card group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-sky/40";
const arrowClass = "ml-auto h-4 w-4 shrink-0 text-white/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-green";

export const Contact = () => {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    setStatus({ state: "sending" });
    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Something went wrong.");

      form.reset();
      setStatus({ state: "sent" });
      setTimeout(() => setStatus({ state: "idle" }), 6000);
    } catch (error) {
      setStatus({ state: "error", message: error instanceof Error ? error.message : "Something went wrong." });
    }
  };

  const busy = status.state === "sending";

  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="07 · Contact"
          title="Let’s build the next reliable thing."
          subtitle="Open to DevOps, cloud, and infrastructure opportunities. Send a note and I’ll get back to you soon."
        />

        <div className="section-frame grid lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative border-b border-white/10 p-7 sm:p-9 lg:border-b-0 lg:border-r"
          >
            <p className="eyebrow">Direct line</p>
            <h3 className="display-font mt-6 text-3xl font-semibold leading-none tracking-[-0.06em] text-white">The cloud line is open.</h3>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/57">If you&apos;re looking for help making infrastructure calmer, safer, and easier to ship, I&apos;d love to hear about it.</p>
            <div className="mt-9 space-y-3">
              <a href={`mailto:${profile.email}`} className={contactCard}>
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-sky/15 text-brand-sky-soft"><Mail className="h-4.5 w-4.5" /></span>
                <span className="min-w-0"><span className="block text-[10px] uppercase tracking-[0.17em] text-white/40">Email</span><span className="mt-1 block truncate text-sm font-semibold text-white">{profile.email}</span></span>
                <ArrowUpRight className={arrowClass} />
              </a>
              <a href={`tel:${profile.phone}`} className={contactCard}>
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-sky/15 text-brand-sky-soft"><Phone className="h-4.5 w-4.5" /></span>
                <span><span className="block text-[10px] uppercase tracking-[0.17em] text-white/40">Phone</span><span className="mt-1 block text-sm font-semibold text-white">{profile.phoneDisplay}</span></span>
                <ArrowUpRight className={arrowClass} />
              </a>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {[
                { href: profile.linkedin, label: "LinkedIn", icon: Linkedin },
                { href: profile.github, label: "GitHub", icon: Github },
              ].map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className={`${contactCard} gap-3`}>
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-sky/15 text-brand-sky-soft transition-transform duration-300 group-hover:scale-110"><social.icon className="h-4 w-4" /></span>
                  <span className="text-sm font-semibold text-white">{social.label}</span>
                  <ArrowUpRight className={arrowClass} />
                </a>
              ))}
            </div>
            <p className="terminal-font mt-9 text-[10px] uppercase tracking-[0.16em] text-brand-green">● available for new opportunities</p>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="relative grid gap-5 p-7 sm:grid-cols-2 sm:p-9"
          >
            {fields.map((field) => (
              <div key={field.name} className={`space-y-2 ${"half" in field ? "" : "sm:col-span-2"}`}>
                <label htmlFor={field.name} className="text-xs font-medium text-white/66">{field.label}</label>
                {"multiline" in field ? (
                  <textarea id={field.name} name={field.name} required rows={6} maxLength={field.maxLength} placeholder={field.placeholder} className={`${inputClass} resize-none py-2.5`} />
                ) : (
                  <input id={field.name} name={field.name} type={"type" in field ? field.type : "text"} required maxLength={field.maxLength} placeholder={field.placeholder} className={`${inputClass} h-11`} />
                )}
              </div>
            ))}

            {/* Honeypot: hidden from people and assistive tech, but bots tend to fill it in. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={busy}
                className="shine inline-flex h-11 min-w-[11rem] items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-[#150b54] transition-transform hover:-translate-y-0.5 hover:bg-[#ece8ff] disabled:cursor-wait"
              >
                {busy ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <><Send className="h-4 w-4" /> Send message</>}
              </button>

              <div aria-live="polite" className="min-h-[1.25rem] text-sm">
                <AnimatePresence mode="wait">
                  {status.state === "sent" && (
                    <motion.p key="sent" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-emerald-300">
                      <Check className="h-4 w-4 shrink-0" /> Message sent. I&apos;ll reply to your email soon.
                    </motion.p>
                  )}
                  {status.state === "error" && (
                    <motion.p key="error" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="flex items-start gap-2 text-rose-300">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>
                        {status.message} You can also email me at{" "}
                        <a href={`mailto:${profile.email}`} className="underline underline-offset-2 hover:text-white">{profile.email}</a>.
                      </span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
