import { motion } from "framer-motion";
import {
  Cloud, Container, GitBranch, Wrench, Activity, Terminal, Database, Network, ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const groups = [
  { icon: Cloud,       title: "Cloud",       items: ["AWS"] },
  { icon: Container,   title: "DevOps",      items: ["Docker", "Kubernetes", "Jenkins"] },
  { icon: Wrench,      title: "IaC",         items: ["Terraform", "Ansible"] },
  { icon: Activity,    title: "Monitoring",  items: ["Grafana", "Prometheus", "ELK"] },
  { icon: Terminal,    title: "Scripting",   items: ["Bash", "Python"] },
  { icon: Database,    title: "Databases",   items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { icon: Network,     title: "Networking",  items: ["VPC", "Route 53"] },
  { icon: ShieldCheck, title: "Security",    items: ["IAM", "WAF", "Vault"] },
  { icon: GitBranch,   title: "Version Control", items: ["Git", "GitHub"] },
];

export const Skills = () => (
  <section id="skills" className="section-padding relative">
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="03 — Skills"
        title="The stack that powers reliable systems."
        subtitle="A compact view of the tools I use to ship, observe, and stabilize cloud infrastructure."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/5 p-5 shadow-glass hover:border-sky-400/25 hover:shadow-[0_20px_60px_-28px_rgba(59,130,246,0.45)] transition-all"
          >
            {/* glow */}
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-brand-sky/0 group-hover:bg-brand-sky/15 blur-2xl transition-all duration-500" />

            <div className="relative">
              <div className="h-10 w-10 rounded-xl bg-gradient-accent flex items-center justify-center text-white mb-3 shadow-accent-glow">
                <g.icon className="h-5 w-5" />
              </div>
              <div className="font-semibold mb-2 tracking-tight text-foreground">{g.title}</div>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="terminal-font text-[11px] px-2 py-0.5 rounded-full bg-black/20 text-foreground/80 border border-white/10"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
