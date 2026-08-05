import { motion } from "framer-motion";
import { Cloud, Cog, GraduationCap, RadioTower, Sparkles } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const highlights = [
  { icon: GraduationCap, label: "Education", value: "B.Tech · Computer Science", detail: "GNA University · 2022–2026" },
  { icon: Cloud, label: "Cloud focus", value: "AWS & platform engineering", detail: "Infrastructure that scales calmly" },
  { icon: Cog, label: "Working style", value: "Automation first", detail: "Repeatable delivery over manual fixes" },
];

export const About = () => (
  <section id="about" className="section-padding relative">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="01 · Profile"
        title="A calm operator behind complex cloud systems."
        subtitle="Turning deployment work, infrastructure, and observability into dependable product foundations."
      />

      <div className="section-frame surface-grid grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative p-7 sm:p-10 lg:p-12"
        >
          <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
            <RadioTower className="h-4 w-4" /> Signal received
          </div>
          <p className="max-w-2xl text-xl leading-relaxed text-white/85 sm:text-2xl">
            I&apos;m Ishit, a DevOps engineer with hands-on experience in AWS, Linux, Docker, Kubernetes, and Jenkins. I build the dependable layers that make applications easier to ship and run.
          </p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
            My work spans EC2 deployments, CI/CD pipelines, container orchestration, monitoring, and the day-to-day problem solving that keeps production services healthy.
          </p>
          <div className="mt-10 flex flex-wrap gap-2">
            {["Infrastructure", "Automation", "Observability", "Security"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/72">{item}</span>
            ))}
          </div>
          <Sparkles className="absolute bottom-7 right-7 h-8 w-8 text-brand-sky/45 sm:bottom-10 sm:right-10" />
        </motion.div>

        <div className="relative border-t border-white/10 bg-[#090716]/48 p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">
          <div className="mb-4 flex items-center justify-between px-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/42">
            <span>Operator profile</span><span>01—03</span>
          </div>
          <div className="space-y-3">
            {highlights.map((item, index) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition-colors hover:bg-white/[0.075]"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-[linear-gradient(145deg,rgba(121,90,255,0.38),rgba(46,36,129,0.2))] text-brand-sky-soft">
                    <item.icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.19em] text-brand-green">{item.label}</p>
                    <h3 className="mt-1 text-sm font-semibold text-white">{item.value}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-white/48">{item.detail}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
