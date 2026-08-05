import { motion } from "framer-motion";
import { Activity, Cloud, Container, Database, GitBranch, Network, ShieldCheck, Terminal, Wrench } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const groups = [
  { icon: Cloud, title: "Cloud", items: ["AWS", "EC2", "S3", "VPC"] },
  { icon: Container, title: "Containers", items: ["Docker", "Kubernetes", "ECS"] },
  { icon: Wrench, title: "Automation", items: ["Terraform", "Ansible", "Jenkins"] },
  { icon: Activity, title: "Observe", items: ["CloudWatch", "Grafana", "Prometheus"] },
  { icon: Terminal, title: "Systems", items: ["Linux", "Bash", "Python"] },
  { icon: Database, title: "Data", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { icon: Network, title: "Network", items: ["Route 53", "Nginx", "Apache"] },
  { icon: ShieldCheck, title: "Secure", items: ["IAM", "WAF", "SSL"] },
  { icon: GitBranch, title: "Ship", items: ["Git", "GitHub", "Actions"] },
];

export const Skills = () => (
  <section id="skills" className="section-padding relative">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="03 · Capability map"
        title="The tools inside my cloud control plane."
        subtitle="A working toolkit for launching, automating, observing, and securing modern application infrastructure."
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.045 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] p-5 shadow-glass transition-colors hover:border-brand-sky/45"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-sky/0 blur-3xl transition-colors duration-500 group-hover:bg-brand-sky/20" />
            <div className="relative flex items-start justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-[#120d2c] text-brand-sky-soft shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"><group.icon className="h-4.5 w-4.5" /></div>
              <span className="terminal-font text-[10px] text-white/28">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="relative mt-6 text-lg font-semibold tracking-tight text-white">{group.title}</h3>
            <div className="relative mt-3 flex flex-wrap gap-1.5">
              {group.items.map((item) => <span key={item} className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-medium text-white/67">{item}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
