import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { profile } from "@/lib/profile";

const EMAIL = profile.email;
const ease = [0.22, 1, 0.36, 1] as const;

const links = [
  { href: "#about", label: "Profile" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Stack" },
  { href: "#projects", label: "Work" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

const headline = ["Have", "infrastructure", "that", "needs"];
const accent = ["a", "steady", "hand?"];

const CtaBand = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease }}
      className="spin-border relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] p-px"
    >
      <div className="spotlight-card relative overflow-hidden rounded-[calc(2rem-1px)] bg-[linear-gradient(180deg,#0d0a26,#070514_70%)] px-6 pb-32 pt-14 text-center sm:px-10 sm:pb-40 sm:pt-20">
        {/* aurora + texture */}
        <div className="aurora absolute -left-[10%] top-[-30%] h-[70%] w-[55%] rounded-full bg-violet-600/30 blur-[90px]" />
        <div className="aurora absolute -right-[10%] top-[-20%] h-[60%] w-[50%] rounded-full bg-sky-500/20 blur-[90px] [animation-delay:-6s] [animation-duration:16s]" />
        <div className="hero-stars absolute inset-0 opacity-40" />
        <div className="absolute inset-0 surface-grid opacity-60 [mask-image:radial-gradient(ellipse_at_50%_40%,black,transparent_65%)]" />

        {/* orbit rings behind the headline */}
        <div className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
          <div className="relative h-[min(34rem,90vw)] w-[min(34rem,90vw)]">
            <div className="absolute inset-0 rounded-full border border-white/[0.06]" />
            <div className="absolute inset-0 animate-[spin_28s_linear_infinite]">
              <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_4px_rgba(103,232,249,0.6)]" />
            </div>
            <div className="absolute inset-[18%] rounded-full border border-dashed border-violet-300/15" />
            <div className="absolute inset-[18%] animate-[spin_18s_linear_infinite_reverse]">
              <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-violet-300 shadow-[0_0_12px_3px_rgba(196,181,253,0.6)]" />
            </div>
          </div>
        </div>

        {/* planet horizon */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 sm:h-48" aria-hidden="true">
          <div className="horizon absolute left-1/2 top-[40%] h-[600px] w-[170%] -translate-x-1/2 rounded-[50%] sm:w-[120%]" />
          <div className="horizon-sweep absolute left-1/2 top-[40%] h-[600px] w-[170%] -translate-x-1/2 rounded-[50%] sm:w-[120%]" />
        </div>

        <div className="relative">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="eyebrow"
          >
            Ready when you are
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.07, delayChildren: 0.3 }}
            aria-label={[...headline, ...accent].join(" ")}
            className="display-font mx-auto mt-7 max-w-4xl text-balance text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-white"
          >
            {[...headline, ...accent].map((word, i) => (
              <span key={i} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                <motion.span
                  variants={{ hidden: { y: "110%", rotate: 4 }, show: { y: 0, rotate: 0 } }}
                  transition={{ duration: 0.8, ease }}
                  className={i >= headline.length ? "shimmer-text inline-block" : "inline-block"}
                >
                  {word}&nbsp;
                </motion.span>
              </span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base"
          >
            From first server to production rollout, I&apos;ll help you ship faster and sleep better.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 1.05, ease }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Magnetic>
              <div className="flex h-12 items-center rounded-full bg-white p-1 pl-5 shadow-[0_14px_50px_-12px_rgba(167,139,250,0.9)]">
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm font-extrabold text-[#140b55]">
                  <Mail className="h-4 w-4" />
                  <span className="hidden sm:inline">{EMAIL}</span>
                  <span className="sm:hidden">Email me</span>
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="ml-3 grid h-10 w-10 place-items-center rounded-full bg-[#140b55] text-white transition-colors hover:bg-[#2a1d8f]"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copied ? "ok" : "copy"}
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      {copied ? <Check className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4" />}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </div>
            </Magnetic>
            <Magnetic>
              <a href={`tel:${profile.phone}`} className="group inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 text-sm font-bold text-white backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/10">
                <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" /> Call me
              </a>
            </Magnetic>
          </motion.div>

          <div className="relative mt-3 h-5" aria-live="polite">
            <AnimatePresence>
              {copied && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="text-xs font-semibold text-emerald-300"
                >
                  Email copied to clipboard
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3 }}
          className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55 sm:bottom-8"
        >
          <MapPin className="h-3 w-3" /> Mohali, India · Open to remote
        </motion.p>
      </div>
    </motion.div>
  );
};

export const Footer = () => (
  <footer className="relative px-5 pb-6 pt-8 sm:px-8 lg:px-10">
    <CtaBand />

    <div className="mx-auto mt-4 flex max-w-7xl flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 sm:flex-row">
      <div className="flex items-center gap-3">
        <img src="/favicon.svg" alt="" width={36} height={36} className="h-9 w-9" />
        <div className="text-center sm:text-left">
          <p className="display-font text-sm font-semibold text-white">Ishit Atwal</p>
          <p className="mt-0.5 text-xs text-white/45">DevOps Engineer · Cloud Systems · Automation</p>
        </div>
      </div>

      <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="group inline-flex items-center gap-0.5 text-xs font-semibold text-white/55 transition-colors hover:text-white">
            {link.label}
            <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        {[
          { href: profile.linkedin, label: "LinkedIn", icon: Linkedin },
          { href: profile.github, label: "GitHub", icon: Github },
        ].map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/60 transition-all hover:-translate-y-0.5 hover:border-brand-sky/50 hover:text-white"
          >
            <social.icon className="h-4 w-4" />
          </a>
        ))}
        <p className="terminal-font ml-1 text-[10px] uppercase tracking-[0.16em] text-white/37">© {new Date().getFullYear()}</p>
        <Magnetic strength={0.5}>
          <a
            href="#home"
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-colors hover:border-brand-sky/60 hover:bg-brand-sky/20"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </Magnetic>
      </div>
    </div>
  </footer>
);
