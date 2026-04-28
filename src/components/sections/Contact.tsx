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
    <section id="contact" className="section-padding bg-muted/30 relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="06 — Contact"
          title="Let's build something reliable together."
        />

        <div className="grid md:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-4"
          >
            <a
              href="mailto:ishitatwal20@gmail.com"
              className="block glass rounded-2xl p-5 shadow-glass hover:shadow-glow transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-accent flex items-center justify-center text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
                  <div className="font-semibold">ishitatwal20@gmail.com</div>
                </div>
              </div>
            </a>

            <a
              href="tel:+917876131708"
              className="block glass rounded-2xl p-5 shadow-glass hover:shadow-glow transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-accent flex items-center justify-center text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Phone</div>
                  <div className="font-semibold">+91-7876131708</div>
                </div>
              </div>
            </a>

            <div className="glass rounded-2xl p-5 shadow-glass terminal-font text-sm">
              <div className="text-brand-green">$ whoami</div>
              <div className="text-foreground/80 mt-1">ishit_atwal</div>
              <div className="text-brand-green mt-2">$ status</div>
              <div className="text-foreground/80 mt-1">open_to_opportunities</div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 glass rounded-3xl p-6 md:p-8 shadow-glass space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your name" className="bg-background/50" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@example.com" className="bg-background/50" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" required placeholder="What's this about?" className="bg-background/50" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required rows={5} placeholder="Tell me about your project..." className="bg-background/50 resize-none" />
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
