import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Github, Linkedin, Loader2, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { SectionHeading } from "../SectionHeading";
import { profile } from "@/lib/profile";

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const body = `${data.get("message")}

— ${data.get("name")} (${data.get("email")})`;
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(String(data.get("subject")))}&body=${encodeURIComponent(body)}`;

    setStatus("sending");
    setTimeout(() => {
      window.location.href = href;
      setStatus("sent");
      toast.success("Opening your email app", { description: "Your message is pre-filled. Just hit send." });
      form.reset();
      setTimeout(() => setStatus("idle"), 2400);
    }, 500);
  };

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
              <a href={`mailto:${profile.email}`} className="spotlight-card group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-sky/40">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-sky/15 text-brand-sky-soft"><Mail className="h-4.5 w-4.5" /></span>
                <span className="min-w-0"><span className="block text-[10px] uppercase tracking-[0.17em] text-white/40">Email</span><span className="mt-1 block truncate text-sm font-semibold text-white">ishitatwal20@gmail.com</span></span>
                <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-white/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-green" />
              </a>
              <a href={`tel:${profile.phone}`} className="spotlight-card group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-sky/40">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-sky/15 text-brand-sky-soft"><Phone className="h-4.5 w-4.5" /></span>
                <span><span className="block text-[10px] uppercase tracking-[0.17em] text-white/40">Phone</span><span className="mt-1 block text-sm font-semibold text-white">+91 78761 31708</span></span>
                <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-white/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-green" />
              </a>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {[
                { href: profile.linkedin, label: "LinkedIn", icon: Linkedin },
                { href: profile.github, label: "GitHub", icon: Github },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spotlight-card group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-sky/40"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-sky/15 text-brand-sky-soft transition-transform duration-300 group-hover:scale-110"><social.icon className="h-4 w-4" /></span>
                  <span className="text-sm font-semibold text-white">{social.label}</span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-white/35 transition-colors group-hover:text-brand-green" />
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
            className="relative space-y-5 p-7 sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2"><Label htmlFor="name" className="text-xs text-white/66">Name</Label><Input id="name" name="name" required placeholder="Your name" className="h-11 border-white/10 bg-black/20 text-white placeholder:text-white/28 transition-shadow focus-visible:border-brand-sky/60 focus-visible:shadow-[0_0_0_4px_hsl(var(--brand-sky)/0.15)] focus-visible:ring-0 focus-visible:ring-offset-0" /></div>
              <div className="space-y-2"><Label htmlFor="email" className="text-xs text-white/66">Email</Label><Input id="email" name="email" type="email" required placeholder="you@example.com" className="h-11 border-white/10 bg-black/20 text-white placeholder:text-white/28 transition-shadow focus-visible:border-brand-sky/60 focus-visible:shadow-[0_0_0_4px_hsl(var(--brand-sky)/0.15)] focus-visible:ring-0 focus-visible:ring-offset-0" /></div>
            </div>
            <div className="space-y-2"><Label htmlFor="subject" className="text-xs text-white/66">Subject</Label><Input id="subject" name="subject" required placeholder="What are you building?" className="h-11 border-white/10 bg-black/20 text-white placeholder:text-white/28 transition-shadow focus-visible:border-brand-sky/60 focus-visible:shadow-[0_0_0_4px_hsl(var(--brand-sky)/0.15)] focus-visible:ring-0 focus-visible:ring-offset-0" /></div>
            <div className="space-y-2"><Label htmlFor="message" className="text-xs text-white/66">Message</Label><Textarea id="message" name="message" required rows={6} placeholder="Tell me a little about the opportunity or project..." className="resize-none border-white/10 bg-black/20 text-white placeholder:text-white/28 transition-shadow focus-visible:border-brand-sky/60 focus-visible:shadow-[0_0_0_4px_hsl(var(--brand-sky)/0.15)] focus-visible:ring-0 focus-visible:ring-offset-0" /></div>
            <Button type="submit" disabled={status !== "idle"} size="lg" className="shine w-full min-w-[11rem] rounded-full bg-white text-[#150b54] transition-transform hover:-translate-y-0.5 hover:bg-[#ece8ff] disabled:opacity-100 sm:w-auto sm:px-7">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={status}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  {status === "idle" && <><Send className="h-4 w-4" /> Send message</>}
                  {status === "sending" && <><Loader2 className="h-4 w-4 animate-spin" /> Preparing…</>}
                  {status === "sent" && <><Check className="h-4 w-4 text-emerald-600" /> Email app opened</>}
                </motion.span>
              </AnimatePresence>
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
