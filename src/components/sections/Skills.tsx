import { motion } from "framer-motion";
import { Activity, Boxes, Cloud, Database, GitBranch, Network, Server, ShieldCheck, Terminal, Wrench } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { TechDeck } from "../TechDeck";

// Mirrors the "Technical Skills" block of the CV. `wide` cards span two columns on larger screens.
const groups = [
  { icon: Cloud, title: "Cloud platforms", items: ["AWS", "Microsoft Azure", "Google Cloud"] },
  { icon: Boxes, title: "Containers & orchestration", items: ["Docker", "Kubernetes", "Amazon ECS", "Amazon EKS"] },
  { icon: Wrench, title: "Infrastructure as Code", items: ["Terraform", "Ansible"] },
  { icon: GitBranch, title: "CI/CD & version control", items: ["Jenkins", "GitHub Actions", "GitLab CI/CD", "AWS CodePipeline", "Git", "GitHub", "GitLab"] },
  { icon: Activity, title: "Monitoring & logging", items: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch", "CloudTrail", "New Relic"], wide: true },
  { icon: Network, title: "Networking", items: ["VPC", "VPC Peering", "Public & Private Subnets", "Internet Gateway", "NAT Gateway", "Route 53", "Security Groups", "Network ACLs"], wide: true },
  { icon: ShieldCheck, title: "Security", items: ["AWS IAM", "AWS WAF", "Secrets Manager", "SonarQube", "HashiCorp Vault"] },
  { icon: Terminal, title: "Scripting & systems", items: ["Bash", "Python", "Linux"] },
  { icon: Database, title: "Databases", items: ["Amazon RDS", "MySQL", "PostgreSQL", "MongoDB"] },
  { icon: Server, title: "Web servers", items: ["Nginx", "Apache", "HAProxy", "PM2"] },
];

export const Skills = () => (
  <section id="skills" className="section-padding relative">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="03 · Capability map"
        title="The tools inside my cloud control plane."
        subtitle="A working toolkit for launching, automating, observing, and securing modern application infrastructure."
      />

      <div className="mb-6">
        <TechDeck />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className={`spotlight-card group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] p-5 shadow-glass transition-colors duration-500 hover:border-brand-sky/45 ${group.wide ? "sm:col-span-2" : ""}`}
          >
            <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-accent transition-transform duration-700 group-hover:scale-x-100" />
            <div className="relative flex items-start justify-between">
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-[#120d2c] text-brand-sky-soft shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:border-brand-sky/50 group-hover:text-brand-green">
                <group.icon className="h-5 w-5" />
              </div>
              <span className="terminal-font text-[10px] text-white/28 transition-colors group-hover:text-white/60">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="relative mt-6 text-lg font-semibold tracking-tight text-white">{group.title}</h3>
            <div className="relative mt-3 flex flex-wrap gap-1.5">
              {group.items.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + (index % 3) * 0.08 + i * 0.05 }}
                  className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[11px] font-medium text-white/70 transition-colors hover:border-brand-green/50 hover:text-white"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
