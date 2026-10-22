import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, FileDown, Github, Linkedin, MapPin } from "lucide-react";
import { Magnetic } from "@/components/Magnetic";
import { Counter } from "@/components/Counter";
import portrait from "@/assets/ishit.webp";
import { profile } from "@/lib/profile";

const roles = ["DevOps Engineer", "Cloud Builder", "Automation Specialist", "Kubernetes Operator"];
const stack = ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "EKS", "Terraform", "Ansible", "Jenkins", "GitHub Actions", "Prometheus", "Grafana", "ELK Stack", "Nginx", "HAProxy", "Vault", "Linux", "Python", "Bash"];
const stats = [
  { value: 4, suffix: "", label: "Live deployments" },
  { value: 40, suffix: "+", label: "Tools in my stack" },
  { value: 3, suffix: "", label: "Cloud platforms" },
];
const coreStack = ["AWS", "Kubernetes", "Terraform", "Jenkins"];

const ease = [0.22, 1, 0.36, 1] as const;

const PortraitCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.35, ease }}
    className="relative mx-auto w-full max-w-[400px] lg:w-[min(100%,420px,calc((100svh_-_12rem)*0.8))] lg:max-w-none"
  >
    <div className="absolute -inset-8 -z-10 rounded-full bg-brand-sky/20 blur-3xl" />

    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_50%_30%,#2b45c9_0%,#151d63_45%,#0a0a24_85%)] shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)]">
      <div className="absolute inset-0 surface-grid opacity-50" />
      <img
        src={portrait}
        alt="Portrait of Ishit Atwal"
        width={876}
        height={820}
        decoding="async"
        draggable={false}
        className="portrait absolute bottom-0 left-1/2 h-[90%] w-auto max-w-none -translate-x-1/2 select-none"
      />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#07061a] via-[#07061a]/70 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9, ease }}
        className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-[#0b0a24]/80 p-4 backdrop-blur-md"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="display-font text-lg font-semibold tracking-tight text-white">Ishit Atwal</p>
            <p className="mt-0.5 flex items-center gap-1.5 text-xs text-white/60">
              <BriefcaseBusiness className="h-3 w-3" /> DevOps Engineer · techcadd
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-300/25 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Available
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {coreStack.map((item) => (
            <span key={item} className="rounded-md border border-white/10 bg-white/[0.05] px-2 py-0.5 text-[10px] font-medium text-white/75">{item}</span>
          ))}
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 1.1, ease }}
      className="absolute -right-3 top-8 flex items-center gap-1.5 rounded-full border border-white/10 bg-[#0b0a24]/85 px-3 py-1.5 text-[11px] font-semibold text-white/80 shadow-lg backdrop-blur-md sm:-right-5"
    >
      <MapPin className="h-3 w-3 text-brand-sky-soft" /> Mohali, India
    </motion.div>
  </motion.div>
);

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="home" className="hero-bg relative isolate min-h-[100svh] overflow-hidden pt-24">
      <div className="hero-stars absolute inset-0 opacity-50" />
      <div className="absolute inset-0 surface-grid [mask-image:radial-gradient(ellipse_at_70%_55%,black,transparent_65%)]" />

      <div className="relative mx-auto grid min-h-[calc(100svh-6rem)] max-w-7xl items-center gap-12 px-5 pb-12 pt-4 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-10">
        {/* Copy */}
        <div className="relative z-10 order-2 text-center lg:order-1 lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow"
          >
            Available for DevOps &amp; Cloud roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="display-font mt-6 text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.92] tracking-[-0.06em] text-white"
          >
            <span className="block text-[0.42em] font-medium tracking-[-0.03em] text-white/60">Hi, I&apos;m</span>
            <span className="block whitespace-nowrap">Ishit Atwal</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 flex h-[1.4em] items-center justify-center overflow-hidden text-[clamp(1.35rem,2.6vw,2.1rem)] font-bold tracking-tight lg:justify-start"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.45, ease }}
                className="inline-block bg-gradient-to-r from-[#c4b5fd] via-[#93c5fd] to-[#67e8f9] bg-clip-text pb-1 text-transparent"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/68 sm:text-lg lg:mx-0"
          >
            I design, automate, and operate resilient cloud infrastructure, so products ship faster and stay online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            <Magnetic>
              <a href="#projects" className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-[#140b55] shadow-[0_12px_48px_-12px_rgba(203,191,255,0.8)] transition-colors hover:bg-[#ebe7ff]">
                Explore my work <ArrowUpRight className="h-4 w-4" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.cv} download={profile.cvFileName} className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 text-sm font-bold text-white transition-colors hover:bg-white/10">
                <FileDown className="h-4 w-4" /> Download CV
              </a>
            </Magnetic>
            {[
              { href: profile.linkedin, label: "LinkedIn", icon: Linkedin },
              { href: profile.github, label: "GitHub", icon: Github },
            ].map((social) => (
              <Magnetic key={social.label} strength={0.5}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-white/80 transition-colors hover:border-brand-sky/60 hover:bg-brand-sky/20 hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              </Magnetic>
            ))}
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mx-auto mt-10 grid max-w-md grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.035] py-4 lg:mx-0"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="px-3 text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="display-font text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  <Counter to={stat.value} />{stat.suffix}
                </dd>
                <p aria-hidden="true" className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white/45">{stat.label}</p>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Portrait */}
        <div className="relative order-1 lg:order-2">
          <PortraitCard />
        </div>
      </div>

      {/* Stack marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-20 border-y border-white/10 bg-white/[0.025] py-4"
      >
        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max animate-marquee gap-10 pr-10">
            {[...stack, ...stack].map((item, i) => (
              <span key={i} className="flex items-center gap-10 text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-brand-sky/70" />
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
