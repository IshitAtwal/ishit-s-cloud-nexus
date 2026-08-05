import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileDown, ServerCog, ShieldCheck, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

const capabilities = [
  { label: "Cloud architecture", icon: ServerCog, className: "bottom-[27%] left-[5%]" },
  { label: "CI/CD delivery", icon: Workflow, className: "bottom-[31%] right-[6%]" },
  { label: "Reliable operations", icon: ShieldCheck, className: "bottom-[21%] right-[11%]" },
];

const stack = ["AWS", "Docker", "Kubernetes", "Terraform", "Linux"];

const Cloud = ({ className, delay, id }: { className: string; delay: number; id: string }) => (
  <motion.svg
    viewBox="0 0 360 170"
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id={`cloud-fill-${id}`} x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.78" />
        <stop offset="42%" stopColor="#4f32cf" stopOpacity="0.58" />
        <stop offset="100%" stopColor="#090511" stopOpacity="0.96" />
      </linearGradient>
      <filter id={`cloud-glow-${id}`} x="-20%" y="-50%" width="140%" height="200%">
        <feGaussianBlur stdDeviation="7" />
      </filter>
    </defs>
    <path
      d="M25 137C9 137 0 125 0 109c0-19 15-34 35-34 6-23 27-39 52-39 27 0 50 18 55 43 10-10 25-16 41-16 29 0 53 20 58 47 8-7 18-11 29-11 25 0 45 16 51 38H25Z"
      fill="#805cff"
      fillOpacity="0.52"
      filter={`url(#cloud-glow-${id})`}
    />
    <path
      d="M25 137C9 137 0 125 0 109c0-19 15-34 35-34 6-23 27-39 52-39 27 0 50 18 55 43 10-10 25-16 41-16 29 0 53 20 58 47 8-7 18-11 29-11 25 0 45 16 51 38H25Z"
      fill={`url(#cloud-fill-${id})`}
      stroke="#c4b5fd"
      strokeOpacity="0.48"
      strokeWidth="1.25"
    />
    <path d="M32 132H329" stroke="#d8d2ff" strokeOpacity="0.42" strokeWidth="1.5" />
  </motion.svg>
);

export const Hero = () => (
  <section id="home" className="relative isolate min-h-screen overflow-hidden bg-[#020109] pt-24">
    <div className="hero-stars absolute inset-0 opacity-70" />
    <div className="absolute inset-x-0 top-[12%] h-96 bg-[radial-gradient(ellipse_at_center,rgba(83,54,218,0.36),transparent_67%)] blur-2xl" />
    <div className="orbit-ring left-[6%] top-[22%] h-56 w-56 opacity-50" />
    <div className="orbit-ring right-[7%] top-[19%] h-72 w-72 opacity-35 [animation-duration:34s]" />

    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[72%] overflow-hidden">
      <div className="hero-planet" />
      <Cloud className="absolute bottom-[9.25rem] left-[-4rem] w-64 sm:bottom-[10.5rem] sm:left-[4%] sm:w-80" delay={0.55} id="left" />
      <Cloud className="absolute bottom-[13.25rem] left-[18%] hidden w-44 opacity-75 lg:block" delay={0.7} id="mid-left" />
      <Cloud className="absolute bottom-[11rem] right-[2%] w-64 sm:bottom-[12.5rem] sm:right-[5%] sm:w-80" delay={0.62} id="right" />
      <Cloud className="absolute bottom-[15rem] right-[22%] hidden w-44 opacity-75 lg:block" delay={0.78} id="mid-right" />
      <div className="hero-horizon" />
    </div>

    <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col px-5 pb-12 sm:px-8 lg:px-10">
      <div className="flex items-center justify-between pt-5 text-[10px] font-medium uppercase tracking-[0.22em] text-white/45 sm:pt-8">
        <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-green shadow-[0_0_12px_hsl(var(--brand-green))]" /> Availability: open</span>
        <span className="hidden sm:block">India · Remote friendly</span>
      </div>

      {capabilities.map((capability, index) => (
        <motion.div
          key={capability.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.65 + index * 0.08 }}
          className={`absolute hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-white/72 backdrop-blur-md xl:flex ${capability.className}`}
        >
          <capability.icon className="h-3.5 w-3.5 text-brand-green" />
          {capability.label}
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center pb-16 text-center sm:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="eyebrow mb-5"
        >
          DevOps Engineer · Cloud Builder
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="display-font pointer-events-none font-black leading-[0.82] tracking-[-0.09em] text-white"
        >
          <span className="block text-[clamp(4.25rem,12vw,10.5rem)]">ISHIT ATWAL</span>
          <span className="mt-2 block whitespace-nowrap text-[clamp(2.15rem,6.6vw,6.3rem)] text-brand-sky-soft">DEVOPS ENGINEER</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.48 }}
          className="mt-7 max-w-md"
        >
          <p className="text-base font-medium leading-relaxed text-white/82 sm:text-lg">
            I design, automate, and operate resilient cloud infrastructure for products that need to keep moving.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <Button asChild size="lg" className="rounded-full bg-white px-5 text-[#140b55] shadow-[0_12px_48px_-12px_rgba(203,191,255,0.72)] hover:bg-[#ebe7ff]">
              <a href="#projects">Explore my work <ArrowUpRight className="ml-1.5 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/15 bg-white/[0.055] px-5 text-white hover:bg-white/10 hover:text-white">
              <a href="/resume.html" download="Ishit_Atwal_CV.html"><FileDown className="mr-1.5 h-4 w-4" /> Download CV</a>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.72 }}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-5 border-t border-white/10 pt-5 text-center sm:flex-row sm:text-left"
      >
        <div>
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/44">Infrastructure toolkit</p>
          <div className="mt-2 flex flex-wrap justify-center gap-x-3 gap-y-1 sm:justify-start">
            {stack.map((item) => <span key={item} className="text-sm font-semibold text-white/82">{item}</span>)}
          </div>
        </div>
        <a href="#about" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/68 transition-colors hover:text-white">
          Scroll to explore <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </motion.div>
    </div>
  </section>
);
