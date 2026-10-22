import { useEffect, useState, type MouseEvent } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { ArrowDown, ArrowUpRight, Cloud, Container, FileDown, GitBranch, Github, Layers3, Linkedin, Ship, Terminal, Workflow, type LucideIcon } from "lucide-react";
import { Magnetic } from "@/components/Magnetic";
import { Counter } from "@/components/Counter";
import portrait from "@/assets/ishit.webp";
import { profile } from "@/lib/profile";

type Orbiter = { label: string; icon: LucideIcon; x: number; y: number; depth: number; float: number };

// Positions are percentages of the stage; cards fan out from the podium on load.
const orbiters: Orbiter[] = [
  { label: "AWS Cloud", icon: Cloud, x: 50, y: 7, depth: 26, float: 5.2 },
  { label: "Docker", icon: Container, x: 19, y: 21, depth: 34, float: 6.1 },
  { label: "Kubernetes", icon: Ship, x: 81, y: 21, depth: 30, float: 5.6 },
  { label: "Terraform", icon: Layers3, x: 12, y: 46, depth: 40, float: 6.6 },
  { label: "Jenkins", icon: Workflow, x: 88, y: 46, depth: 38, float: 5.9 },
  { label: "Linux", icon: Terminal, x: 15, y: 70, depth: 46, float: 6.3 },
  { label: "CI/CD", icon: GitBranch, x: 85, y: 70, depth: 44, float: 5.4 },
];

const roles = ["DevOps Engineer", "Cloud Builder", "Automation Specialist", "Kubernetes Operator"];
const stack = ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "EKS", "Terraform", "Ansible", "Jenkins", "GitHub Actions", "Prometheus", "Grafana", "ELK Stack", "Nginx", "HAProxy", "Vault", "Linux", "Python", "Bash"];
const stats = [
  { value: 4, suffix: "", label: "Live deployments" },
  { value: 40, suffix: "+", label: "Tools in my stack" },
  { value: 3, suffix: "", label: "Cloud platforms" },
];

const particles = [12, 24, 33, 41, 52, 60, 68, 77, 86];
const ease = [0.22, 1, 0.36, 1] as const;

const OrbitCard = ({ item, index, mx, my }: { item: Orbiter; index: number; mx: MotionValue<number>; my: MotionValue<number> }) => {
  const x = useTransform(mx, (v) => v * item.depth);
  const y = useTransform(my, (v) => v * item.depth);

  return (
    <motion.div
      className="absolute z-20 [translate:-50%_-50%]"
      initial={{ left: "50%", top: "62%", opacity: 0, scale: 0.3 }}
      animate={{ left: `${item.x}%`, top: `${item.y}%`, opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.9 + index * 0.09, ease }}
    >
      <motion.div style={{ x, y }}>
        <div className="animate-float-card" style={{ animationDuration: `${item.float}s`, animationDelay: `${index * 0.3}s` }}>
          <motion.div
            whileHover={{ scale: 1.08, y: -4 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
            className="orbit-card group flex cursor-default items-center gap-2 rounded-xl px-2 py-1.5 sm:gap-3 sm:rounded-2xl sm:px-3.5 sm:py-2.5"
          >
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.07] text-brand-sky-soft transition-colors group-hover:text-brand-green sm:h-9 sm:w-9 sm:rounded-xl">
              <item.icon className="h-3 w-3 sm:h-4 sm:w-4" />
            </span>
            <span className="whitespace-nowrap text-[11px] font-bold text-white sm:text-[15px]">{item.label}</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Podium = () => (
  <div className="absolute bottom-[4%] left-1/2 z-10 aspect-[3/1] w-[64%] -translate-x-1/2">
    <div className="absolute -inset-x-[12%] -inset-y-[30%] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(124,92,255,0.6),rgba(56,98,255,0.25)_45%,transparent_70%)] blur-2xl animate-pulse-glow" />
    {/* cylinder side */}
    <div className="absolute inset-x-[3%] top-[18%] bottom-[-14%] rounded-[50%] bg-[linear-gradient(180deg,#1a2a8c,#0a0f3d_60%,#05061a)] shadow-[0_8px_30px_rgba(168,85,247,0.7),inset_0_-3px_0_rgba(217,70,239,0.85)]" />
    {/* top surface */}
    <div className="absolute inset-0 rounded-[50%] border border-cyan-300/60 bg-[radial-gradient(ellipse_at_50%_40%,#2f4bd8,#14206e_55%,#0a0f3f)] shadow-[0_0_24px_rgba(56,189,248,0.6),inset_0_0_30px_rgba(96,165,250,0.55)]" />
    {/* spinning rings on the surface */}
    <div className="absolute inset-x-[8%] top-1/2 aspect-square -translate-y-1/2 scale-y-[0.333]">
      <div className="podium-ring absolute inset-0 rounded-full" />
    </div>
    <div className="absolute inset-x-[22%] top-1/2 aspect-square -translate-y-1/2 scale-y-[0.333]">
      <div className="podium-ring podium-ring-reverse absolute inset-0 rounded-full opacity-70" />
    </div>
  </div>
);

const OrbitLines = () => (
  <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 z-0 h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="orbit-stroke" x1="0" x2="1">
        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
        <stop offset="30%" stopColor="#60a5fa" stopOpacity="0.7" />
        <stop offset="70%" stopColor="#a78bfa" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
      </linearGradient>
    </defs>
    {[
      { ry: 20, rot: -7, delay: 0.6 },
      { ry: 30, rot: 6, delay: 0.8 },
    ].map((o) => (
      <g key={o.ry} transform={`rotate(${o.rot} 50 66)`}>
        <motion.ellipse
          cx="50" cy="66" rx="47" ry={o.ry}
          fill="none" stroke="url(#orbit-stroke)" strokeWidth="1.2" vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: o.delay, ease }}
        />
        <ellipse
          cx="50" cy="66" rx="47" ry={o.ry} pathLength={300}
          fill="none" stroke="#bae6fd" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke"
          className="orbit-comet" style={{ animationDelay: `${o.delay * 3}s` }}
        />
      </g>
    ))}
  </svg>
);

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 18 });
  const my = useSpring(rawY, { stiffness: 60, damping: 18 });
  const portraitX = useTransform(mx, (v) => v * -14);
  const portraitY = useTransform(my, (v) => v * -10);
  const stageRotateY = useTransform(mx, (v) => v * 6);
  const stageRotateX = useTransform(my, (v) => v * -5);

  useEffect(() => {
    const id = window.setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  const onMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    rawX.set((event.clientX - rect.left) / rect.width - 0.5);
    rawY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const name = "Ishit Atwal";

  return (
    <section
      id="home"
      onMouseMove={onMove}
      onMouseLeave={() => { rawX.set(0); rawY.set(0); }}
      className="hero-bg relative isolate min-h-[100svh] overflow-hidden pt-24"
    >
      <div className="hero-stars absolute inset-0 opacity-70" />
      <div className="hero-stars hero-stars-twinkle absolute inset-0" />
      <div className="absolute inset-0 surface-grid [mask-image:radial-gradient(ellipse_at_70%_60%,black,transparent_65%)]" />

      <div className="relative mx-auto grid min-h-[calc(100svh-6rem)] max-w-7xl items-center gap-6 px-5 pb-10 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-4 lg:px-10">
        {/* Copy */}
        <div className="relative z-30 order-2 text-center lg:order-1 lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="eyebrow"
          >
            Available for DevOps &amp; Cloud roles
          </motion.p>

          <h1 className="display-font mt-6 text-[clamp(3rem,7.4vw,6.4rem)] font-bold leading-[0.9] tracking-[-0.06em] text-white">
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
              <a href={profile.cv} download={profile.cvFileName} className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 text-sm font-bold text-white backdrop-blur-md transition-colors hover:bg-white/10">
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
            className="mx-auto mt-10 grid max-w-md grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.035] py-4 backdrop-blur-md lg:mx-0"
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

        {/* Orbit stage */}
        <div className="relative order-1 mx-auto w-full max-w-[640px] [perspective:1200px] lg:order-2">
          <motion.div
            style={{ rotateX: stageRotateX, rotateY: stageRotateY }}
            className="relative aspect-square w-full [transform-style:preserve-3d]"
          >
            <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(59,91,255,0.35),transparent_65%)] blur-2xl" />
            <motion.div
              initial={{ opacity: 0, scaleY: 0.2 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease }}
              className="spotlight absolute bottom-[14%] left-1/2 h-[86%] w-[70%] origin-bottom [translate:-50%_0]"
            />

            <OrbitLines />
            <Podium />

            {particles.map((left, i) => (
              <span
                key={left}
                className="particle absolute bottom-[16%] z-10 h-1 w-1 rounded-full bg-cyan-200 shadow-[0_0_8px_#a5f3fc]"
                style={{ left: `${left * 0.6 + 20}%`, animationDuration: `${4 + (i % 3)}s`, animationDelay: `${i * 0.55}s` }}
              />
            ))}

            {/* Portrait standing on the podium */}
            <motion.div
              style={{ x: portraitX, y: portraitY }}
              className="absolute bottom-[17%] left-1/2 z-10 h-[64%] [translate:-50%_0]"
            >
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.5, ease }}
                className="h-full"
              >
                <img
                  src={portrait}
                  alt="Portrait of Ishit Atwal"
                  width={687}
                  height={900}
                  decoding="async"
                  className="portrait animate-float-card h-full w-auto select-none [animation-duration:6s]"
                  draggable={false}
                />
              </motion.div>
            </motion.div>

            {orbiters.map((item, index) => (
              <OrbitCard key={item.label} item={item} index={index} mx={mx} my={my} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stack marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="relative z-20 border-y border-white/10 bg-white/[0.025] py-4 backdrop-blur-sm"
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

      <a
        href="#about"
        aria-label="Scroll to profile"
        className="absolute bottom-24 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45 transition-colors hover:text-white xl:flex"
      >
        <span className="grid h-9 w-6 justify-center rounded-full border border-white/25 pt-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
        </span>
        <ArrowDown className="h-3 w-3" />
      </a>
    </section>
  );
};
