import { motion } from "framer-motion";
import { GraduationCap, Cloud, Cog } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const items = [
  {
    icon: GraduationCap,
    title: "B.Tech Computer Science",
    desc: "GNA University · Aug 2022 – June 2026",
  },
  {
    icon: Cloud,
    title: "DevOps Experience",
    desc: "techcadd Mohali · DevOps Engineer",
  },
  {
    icon: Cog,
    title: "Cloud & Automation",
    desc: "AWS, Docker, Kubernetes, Jenkins, IaC",
  },
];

export const About = () => (
  <section id="about" className="section-padding relative">
    <div className="mx-auto max-w-5xl">
      <SectionHeading eyebrow="01 — About" title="Engineer at the intersection of cloud, code, and automation." />

      <div className="grid md:grid-cols-5 gap-10 items-start">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 text-lg text-muted-foreground leading-relaxed"
        >
          I'm a Computer Science undergraduate at GNA University with hands-on
          experience as a DevOps Engineer and Junior Cloud Computing Intern at
          techcadd Mohali. I work across AWS, Linux, Docker, Kubernetes, and Jenkins
          to build resilient infrastructure and automate deployments.
          <br /><br />
          My focus is on shipping secure, scalable, and reliable cloud systems,
          including EC2-based deployments, CI/CD pipelines, container orchestration,
          and production application monitoring.
        </motion.p>

        <div className="md:col-span-2 space-y-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ x: 4 }}
              className="card-premium p-5 hover:border-white/20 hover:shadow-md transition-all group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 h-11 w-11 rounded-lg bg-gradient-accent flex items-center justify-center text-white shadow-lg group-hover:shadow-accent-glow transition-all">
                  <it.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{it.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{it.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
