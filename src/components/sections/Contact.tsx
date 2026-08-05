import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { SectionHeading } from "../SectionHeading";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message ready", {
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="06 — Contact"
          title="Let's build something reliable together."
          subtitle="Open to DevOps, cloud, and infrastructure roles."
        />

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-4"
          >
            <motion.a
              href="mailto:ishitatwal20@gmail.com"
              whileHover={{ y: -4 }}
              className="block card-premium p-6 hover:border-white/20 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-accent flex items-center justify-center text-white shadow-lg group-hover:shadow-accent-glow transition-all">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Email</div>
                  <div className="font-semibold text-foreground mt-1">ishitatwal20@gmail.com</div>
                </div>
              </div>
            </motion.a>

            <motion.a
              href="tel:+917876131708"
              whileHover={{ y: -4 }}
              className="block card-premium p-6 hover:border-white/20 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-cyan flex items-center justify-center text-white shadow-lg group-hover:shadow-glow transition-all">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Phone</div>
                  <div className="font-semibold text-foreground mt-1">+91-7876131708</div>
                </div>
              </div>
            </motion.a>

            <div className="rounded-xl border border-white/15 bg-[#050817] p-6 shadow-md terminal-font text-sm space-y-2">
              <div className="text-transparent bg-gradient-cyan bg-clip-text">$ whoami</div>
              <div className="text-foreground/80">ishit_atwal</div>
              <div className="text-transparent bg-gradient-cyan bg-clip-text mt-3">$ focus</div>
              <div className="text-foreground/80">devops_cloud_linux_automation</div>
              <div className="text-transparent bg-gradient-cyan bg-clip-text mt-3">$ status</div>
              <div className="text-foreground/80">open_to_opportunities</div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 card-premium p-8 space-y-5 hover:border-white/20 hover:shadow-lg transition-all"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your name" className="bg-background/50 border-white/10" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@example.com" className="bg-background/50 border-white/10" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" required placeholder="What's this about?" className="bg-background/50 border-white/10" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required rows={5} placeholder="Tell me about your project..." className="bg-background/50 border-white/10 resize-none" />
            </div>
            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="w-full rounded-full bg-gradient-accent text-white border-0 hover:opacity-95 shadow-accent-glow"
            >
              <Send className="h-4 w-4 mr-2" />
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
