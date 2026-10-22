import { motion } from "framer-motion";
import { Cloud, Cog, GraduationCap, MapPin, RadioTower, ShieldCheck } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import portrait from "@/assets/ishit.webp";

const highlights = [
  { icon: GraduationCap, label: "Education", value: "B.Tech · Computer Science", detail: "GNA University, Phagwara · 2022–2026" },
  { icon: Cloud, label: "Cloud focus", value: "AWS · Azure · GCP", detail: "Infrastructure that scales calmly" },
  { icon: Cog, label: "Working style", value: "Automation first", detail: "Repeatable delivery over manual fixes" },
];

const focus = ["Infrastructure", "Automation", "Observability", "Security"];
const ease = [0.22, 1, 0.36, 1] as const;

const PortraitCard = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.94, y: 24 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, ease }}
    className="relative mx-auto w-full max-w-sm lg:max-w-none"
  >
    {/* rotating gradient border */}
    <div className="spin-border relative overflow-hidden rounded-[2rem] p-px">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-1px)] bg-[radial-gradient(circle_at_50%_38%,#2f4bd8_0%,#16206b_45%,#080617_80%)]">
        <div className="absolute inset-0 surface-grid opacity-60" />
        <div className="absolute left-1/2 top-[30%] aspect-square w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        <div className="absolute left-1/2 top-[30%] aspect-square w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-200/20 animate-[spin_30s_linear_infinite]" />
        <img
          src={portrait}
          alt="Ishit Atwal"
          loading="lazy"
          decoding="async"
          width={687}
          height={900}
          className="portrait absolute bottom-0 left-1/2 h-[92%] w-auto max-w-none -translate-x-1/2"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#080617] to-transparent" />
        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
          <div>
            <p className="display-font text-xl font-semibold tracking-tight text-white">Ishit Atwal</p>
            <p className="mt-0.5 flex items-center gap-1 text-xs text-white/55"><MapPin className="h-3 w-3" /> Mohali, Punjab</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-emerald-300/25 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-200">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
            </span>
            Open to work
          </span>
        </div>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.6, ease }}
      className="absolute -left-3 top-10 sm:-left-6"
    >
      <div className="orbit-card animate-float-card flex items-center gap-2 rounded-2xl px-3 py-2">
        <Cloud className="h-4 w-4 text-cyan-300" />
        <span className="text-xs font-bold text-white">AWS · Docker · K8s</span>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.65, duration: 0.6, ease }}
      className="absolute -right-3 top-[42%] sm:-right-6"
    >
      <div className="orbit-card animate-float-card flex items-center gap-2 rounded-2xl px-3 py-2 [animation-delay:1.2s]">
        <ShieldCheck className="h-4 w-4 text-violet-300" />
        <span className="text-xs font-bold text-white">Production-minded</span>
      </div>
    </motion.div>
  </motion.div>
);

export const About = () => (
  <section id="about" className="section-padding relative">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="01 · Profile"
        title="A calm operator behind complex cloud systems."
        subtitle="Turning deployment work, infrastructure, and observability into dependable product foundations."
      />

      <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <PortraitCard />

        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
              <RadioTower className="h-4 w-4" /> Signal received
            </div>
            <p className="text-xl leading-relaxed text-white/85 sm:text-2xl">
              I&apos;m Ishit, a DevOps engineer with hands-on experience in <span className="text-white">AWS, Linux, Docker, Kubernetes, and Jenkins</span>. I build the dependable layers that make applications easier to ship and run.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              My work spans EC2 deployments, CI/CD pipelines, container orchestration, monitoring, and the day-to-day problem solving that keeps production services healthy.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {focus.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.07, type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/72 transition-colors hover:border-brand-sky/50 hover:text-white"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.1, ease }}
                whileHover={{ y: -4 }}
                className="spotlight-card group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-brand-sky/40"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-[linear-gradient(145deg,rgba(121,90,255,0.38),rgba(46,36,129,0.2))] text-brand-sky-soft transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110">
                  <item.icon className="h-4.5 w-4.5" />
                </div>
                <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.19em] text-brand-green">{item.label}</p>
                <h3 className="mt-1 text-sm font-semibold text-white">{item.value}</h3>
                <p className="mt-1 text-xs leading-relaxed text-white/48">{item.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
