import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { SectionHeading } from "../SectionHeading";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message ready", { description: "Thanks for reaching out — I’ll get back to you soon." });
      form.reset();
    }, 700);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="06 · Contact"
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
              <a href="mailto:ishitatwal20@gmail.com" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition-colors hover:bg-white/[0.075]">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-sky/15 text-brand-sky-soft"><Mail className="h-4.5 w-4.5" /></span>
                <span className="min-w-0"><span className="block text-[10px] uppercase tracking-[0.17em] text-white/40">Email</span><span className="mt-1 block truncate text-sm font-semibold text-white">ishitatwal20@gmail.com</span></span>
                <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-white/35 transition-colors group-hover:text-brand-green" />
              </a>
              <a href="tel:+917876131708" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition-colors hover:bg-white/[0.075]">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-sky/15 text-brand-sky-soft"><Phone className="h-4.5 w-4.5" /></span>
                <span><span className="block text-[10px] uppercase tracking-[0.17em] text-white/40">Phone</span><span className="mt-1 block text-sm font-semibold text-white">+91 78761 31708</span></span>
                <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-white/35 transition-colors group-hover:text-brand-green" />
              </a>
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
              <div className="space-y-2"><Label htmlFor="name" className="text-xs text-white/66">Name</Label><Input id="name" name="name" required placeholder="Your name" className="h-11 border-white/10 bg-black/20 text-white placeholder:text-white/28 focus-visible:ring-brand-sky" /></div>
              <div className="space-y-2"><Label htmlFor="email" className="text-xs text-white/66">Email</Label><Input id="email" name="email" type="email" required placeholder="you@example.com" className="h-11 border-white/10 bg-black/20 text-white placeholder:text-white/28 focus-visible:ring-brand-sky" /></div>
            </div>
            <div className="space-y-2"><Label htmlFor="subject" className="text-xs text-white/66">Subject</Label><Input id="subject" name="subject" required placeholder="What are you building?" className="h-11 border-white/10 bg-black/20 text-white placeholder:text-white/28 focus-visible:ring-brand-sky" /></div>
            <div className="space-y-2"><Label htmlFor="message" className="text-xs text-white/66">Message</Label><Textarea id="message" name="message" required rows={6} placeholder="Tell me a little about the opportunity or project..." className="resize-none border-white/10 bg-black/20 text-white placeholder:text-white/28 focus-visible:ring-brand-sky" /></div>
            <Button type="submit" disabled={loading} size="lg" className="w-full rounded-full bg-white text-[#150b54] hover:bg-[#ece8ff] sm:w-auto sm:px-7"><Send className="mr-2 h-4 w-4" />{loading ? "Sending..." : "Send message"}</Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
