import { motion } from "framer-motion";
import { Activity, Braces, CloudCog, Radar } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const systems = [
  { icon: CloudCog, title: "Infrastructure", value: "AWS", detail: "Networks, compute, identity", metric: "04 core layers" },
  { icon: Braces, title: "Delivery", value: "CI/CD", detail: "Build, test, release", metric: "Automated flow" },
  { icon: Activity, title: "Observability", value: "Live", detail: "Logs, alerts, metrics", metric: "Always watching" },
  { icon: Radar, title: "Reliability", value: "Ready", detail: "Rollback, health, recovery", metric: "Production-minded" },
];

const bars = [40, 70, 55, 85, 60, 95, 72, 50, 80, 65];

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
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="spotlight-card group rounded-2xl border border-white/10 bg-[#080614]/72 p-5 transition-colors duration-500 hover:border-brand-sky/40"
            >
              <div className="flex items-start justify-between">
                <system.icon className="h-5 w-5 text-brand-sky-soft transition-transform duration-500 group-hover:scale-125 group-hover:text-brand-green" />
                <span className="flex items-center gap-1.5 text-[10px] font-semibold text-brand-green">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-green shadow-[0_0_8px_hsl(var(--brand-green))]" />ACTIVE
                </span>
              </div>
              <div className="mt-6 flex h-10 items-end justify-between" aria-hidden="true">
                {bars.map((height, i) => (
                  <span
                    key={i}
                    className="eq-bar w-[5px] rounded-t-[2px] bg-gradient-to-t from-brand-sky/30 to-cyan-300/80"
                    style={{ height: `${height}%`, animationDelay: `${(i * 0.17 + index * 0.31) % 1.6}s` }}
                  />
                ))}
              </div>
              <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">{system.title}</p>
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
