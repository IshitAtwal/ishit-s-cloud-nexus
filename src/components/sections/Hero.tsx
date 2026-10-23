import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, FileDown, Github, Linkedin } from "lucide-react";
import { Magnetic } from "@/components/Magnetic";
import { Counter } from "@/components/Counter";
import headshot from "@/assets/ishit-headshot.webp";
import awsLogo from "@/assets/tech/aws.svg";
import kubernetesLogo from "@/assets/tech/kubernetes.svg";
import dockerLogo from "@/assets/tech/docker.svg";
import terraformLogo from "@/assets/tech/terraform.svg";
import { profile } from "@/lib/profile";

const roles = ["DevOps Engineer", "Cloud Builder", "Automation Specialist", "Kubernetes Operator"];
const stack = ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "EKS", "Terraform", "Ansible", "Jenkins", "GitHub Actions", "Prometheus", "Grafana", "ELK Stack", "Nginx", "HAProxy", "Vault", "Linux", "Python", "Bash"];
const stats = [
  { value: 4, suffix: "", label: "Live deployments" },
  { value: 40, suffix: "+", label: "Tools in my stack" },
  { value: 3, suffix: "", label: "Cloud platforms" },
];

// Logo badges riding a slowly rotating orbit around the portrait (angles in degrees, 0 = right).
const badges = [
  { name: "AWS", logo: awsLogo, angle: 215 },
  { name: "Kubernetes", logo: kubernetesLogo, angle: 325 },
  { name: "Docker", logo: dockerLogo, angle: 145 },
  { name: "Terraform", logo: terraformLogo, angle: 35 },
];

const ease = [0.22, 1, 0.36, 1] as const;

const PortraitOrbit = () => (
  <div className="relative mx-auto mt-10 w-[min(100%-5rem,290px)] sm:w-[min(100%,360px)] lg:mt-0 lg:w-[min(100%,400px,calc((100svh_-_15rem)*0.85))]">
    <div className="absolute -inset-16 -z-10 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.4),transparent_65%)] blur-2xl" />

    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3, ease }}
      className="group relative aspect-square"
    >
      {/* Orbit ring carrying the logo badges; badges counter-rotate so they stay upright. Hover pauses it. */}
      <div className="absolute -inset-[7%] rounded-full border border-dashed sm:-inset-[11%] border-white/15 animate-[spin_48s_linear_infinite] group-hover:[animation-play-state:paused]">
        {badges.map((badge, i) => {
          const rad = (badge.angle * Math.PI) / 180;
          return (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.9 + i * 0.12 }}
              className="absolute"
              style={{ left: `${50 + 50 * Math.cos(rad)}%`, top: `${50 + 50 * Math.sin(rad)}%`, translate: "-50% -50%" }}
            >
              <div className="animate-[spin_48s_linear_infinite_reverse] group-hover:[animation-play-state:paused]">
                <div
                  title={badge.name}
                  className="grid h-11 w-11 place-items-center rounded-2xl border border-white/70 bg-white p-2 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-110 sm:h-14 sm:w-14 sm:p-2.5"
                >
                  <img src={badge.logo} alt={`${badge.name} logo`} className="h-full w-full object-contain" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Full gradient ring that rotates continuously behind the photo. */}
      <div className="absolute inset-0 overflow-hidden rounded-full p-[3px] shadow-[0_30px_80px_-30px_rgba(99,102,241,0.9)]">
        <div className="absolute inset-[-50%] animate-[spin_7s_linear_infinite] bg-[conic-gradient(from_0deg,#8b5cf6,#22d3ee,#6366f1,#ec4899,#8b5cf6)]" />
        <div className="relative h-full w-full overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_35%,#3352e0_0%,#1a2378_50%,#0b0b2c_90%)]">
          <div className="absolute inset-0 surface-grid opacity-40" />
          <img
            src={headshot}
            alt="Portrait of Ishit Atwal"
            width={876}
            height={820}
            decoding="async"
            draggable={false}
            className="absolute inset-x-0 bottom-0 mx-auto h-[94%] w-auto max-w-none select-none [translate:-50%_0] left-1/2"
          />
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1.3, ease }}
      className="mt-[calc(11%+2.75rem)] flex justify-center"
    >
      <div className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-[#0b0a24]/90 px-4 py-2 text-xs font-semibold text-white/85 shadow-[0_14px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        Open to work
        <span className="hidden text-white/60 sm:inline"><span className="mr-2 text-white/35">·</span>DevOps Engineer @ techcadd</span>
      </div>
    </motion.div>
  </div>
);

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  const name = "Ishit Atwal";

  return (
    <section id="home" className="hero-bg relative isolate min-h-[100svh] overflow-hidden pt-24">
      <div className="hero-stars absolute inset-0 opacity-60" />
      <div className="absolute inset-0 surface-grid [mask-image:radial-gradient(ellipse_at_70%_55%,black,transparent_65%)]" />

      <div className="relative mx-auto grid min-h-[calc(100svh-6rem)] max-w-7xl items-center gap-14 px-5 pb-16 pt-4 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-10">
        {/* Copy */}
        <div className="relative z-10 order-2 text-center lg:order-1 lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="eyebrow"
          >
            Available for DevOps &amp; Cloud roles
          </motion.p>

          <h1 className="display-font mt-6 text-[clamp(3rem,7vw,6.2rem)] font-bold leading-[0.9] tracking-[-0.06em] text-white">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block text-[0.42em] font-medium tracking-[-0.03em] text-white/60"
            >
              Hi, I&apos;m
            </motion.span>
            <span className="block whitespace-nowrap" aria-label={name}>
              {name.split("").map((char, i) => (
                <motion.span
                  key={i}
                  aria-hidden="true"
                  initial={{ opacity: 0, y: "0.6em", rotateX: -80, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.045, ease }}
                  className="inline-block origin-bottom"
                >
                  {char === " " ? " " : char}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
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
            <span className="ml-1 h-[0.9em] w-[3px] animate-pulse rounded-full bg-brand-green" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/68 sm:text-lg lg:mx-0"
          >
            I design, automate, and operate resilient cloud infrastructure, so products ship faster and stay online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            <Magnetic>
              <a href="#projects" className="shine inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-[#140b55] shadow-[0_12px_48px_-12px_rgba(203,191,255,0.8)]">
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
            transition={{ duration: 0.7, delay: 1 }}
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
          <PortraitOrbit />
        </div>
      </div>

      {/* Stack marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
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
