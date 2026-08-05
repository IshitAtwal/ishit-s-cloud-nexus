import { motion } from "framer-motion";
import { Activity, Braces, CloudCog, Radar } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const systems = [
  { icon: CloudCog, title: "Infrastructure", value: "AWS", detail: "Networks, compute, identity", metric: "04 core layers" },
  { icon: Braces, title: "Delivery", value: "CI/CD", detail: "Build, test, release", metric: "Automated flow" },
  { icon: Activity, title: "Observability", value: "Live", detail: "Logs, alerts, metrics", metric: "Always watching" },
  { icon: Radar, title: "Reliability", value: "Ready", detail: "Rollback, health, recovery", metric: "Production-minded" },
];

export const Showcase = () => (
  <section id="showcase" className="section-padding relative">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="04A · Control plane"
        title="Every healthy product needs a steady operating system."
        subtitle="The principles I bring to every environment, expressed as a simple control-plane snapshot."
      />

      <div className="section-frame p-5 sm:p-7 lg:p-8">
        <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/72"><span className="h-2 w-2 rounded-full bg-brand-green shadow-[0_0_15px_hsl(var(--brand-green))]" /> System health</div>
          <p className="terminal-font text-[10px] text-white/38">LAST SYNC · NOW</p>
        </div>
        <div className="relative mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {systems.map((system, index) => (
            <motion.article
              key={system.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-2xl border border-white/10 bg-[#080614]/72 p-5"
            >
              <div className="flex items-start justify-between"><system.icon className="h-5 w-5 text-brand-sky-soft" /><span className="text-[10px] text-brand-green">ACTIVE</span></div>
              <p className="mt-8 text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">{system.title}</p>
              <h3 className="display-font mt-1 text-3xl font-semibold tracking-[-0.06em] text-white">{system.value}</h3>
              <p className="mt-2 text-xs text-white/56">{system.detail}</p>
              <div className="mt-5 border-t border-white/10 pt-3 text-[10px] uppercase tracking-[0.14em] text-white/42">{system.metric}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);
