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

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group card-premium p-6 hover:border-white/20 hover:shadow-lg transition-all cursor-pointer"
          >
            {/* Glow effect */}
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-accent/0 group-hover:bg-gradient-accent/10 blur-3xl transition-all duration-500 pointer-events-none" />

            <div className="relative">
              <div className="h-12 w-12 rounded-xl bg-gradient-accent flex items-center justify-center text-white mb-4 shadow-lg group-hover:shadow-accent-glow transition-all">
                <g.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-foreground group-hover:text-transparent group-hover:bg-gradient-text group-hover:bg-clip-text transition-all">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="terminal-font text-xs px-2.5 py-1 rounded-lg bg-white/5 text-foreground/80 border border-white/15 hover:border-white/30 hover:bg-white/10 transition-all"
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
