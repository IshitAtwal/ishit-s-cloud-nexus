import { motion } from "framer-motion";
import { Database, ShieldCheck, ServerCog, Workflow } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const showcases = [
  {
    icon: ServerCog,
    title: "Infrastructure Blueprint",
    desc: "Architecture for AWS workloads with EC2, VPC, IAM, and CloudWatch.",
    accent: "from-sky-500/35 to-indigo-500/20",
  },
  {
    icon: Workflow,
    title: "Release Pipeline",
    desc: "Automated delivery with Jenkins, GitHub, Docker, and Linux deploy targets.",
    accent: "from-emerald-500/30 to-cyan-500/15",
  },
  {
    icon: ShieldCheck,
    title: "Production Stability",
    desc: "Monitoring, rollback readiness, and service health checks for live systems.",
    accent: "from-amber-400/25 to-sky-400/10",
  },
  {
    icon: Database,
    title: "Data & App Stack",
    desc: "Node.js, MongoDB, PostgreSQL, and containerized application environments.",
    accent: "from-fuchsia-500/20 to-blue-500/20",
  },
];

export const Showcase = () => (
  <section id="showcase" className="section-padding relative">
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="04A — Showcase"
        title="A few systems I build around."
        subtitle="Extra visual content to make the portfolio feel fuller and more product-like."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {showcases.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
            className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-md"
          >
            <div className={`mb-4 h-44 rounded-[1.3rem] bg-gradient-to-br ${item.accent} border border-white/10 p-4`}>
              <div className="flex h-full items-end justify-between">
                <div className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/80">
                  Visual Tile {String(index + 1).padStart(2, "0")}
                </div>
                <div className="h-12 w-12 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-accent text-white shadow-accent-glow">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);