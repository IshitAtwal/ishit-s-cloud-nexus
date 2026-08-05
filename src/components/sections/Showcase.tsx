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

      <div className="grid gap-5 md:grid-cols-2">
        {showcases.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="group card-premium overflow-hidden hover:border-white/20 hover:shadow-lg transition-all"
          >
            <div className={`mb-5 h-48 rounded-xl bg-gradient-to-br ${item.accent} border border-white/15 p-5`}>
              <div className="flex h-full items-end justify-between">
                <div className="rounded-lg border border-white/20 bg-black/30 px-3 py-1.5 text-xs uppercase tracking-wider text-white/70 font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="h-14 w-14 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm" />
              </div>
            </div>

            <div className="flex items-start gap-4 px-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-accent text-white shadow-lg group-hover:shadow-accent-glow transition-all">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
