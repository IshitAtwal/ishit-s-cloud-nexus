import { motion } from "framer-motion";
import { GraduationCap, Cloud, Cog } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const items = [
  {
    icon: GraduationCap,
    title: "B.Tech Computer Science",
    desc: "GNA University · 2022 – 2026",
  },
  {
    icon: Cloud,
    title: "Cloud Computing Focus",
    desc: "AWS, Azure, infrastructure architecture",
  },
  {
    icon: Cog,
    title: "DevOps & Automation",
    desc: "CI/CD pipelines, containers, IaC",
  },
];

export const About = () => (
  <section id="about" className="section-padding relative">
    <div className="mx-auto max-w-5xl">
      <SectionHeading eyebrow="01 — About" title="Engineer at the intersection of code and infrastructure." />

      <div className="grid md:grid-cols-5 gap-8 items-start">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 text-lg text-muted-foreground leading-relaxed"
        >
          I'm a Computer Science undergraduate at GNA University with a deep focus on
          cloud computing, DevOps, and automation. I build resilient infrastructure,
          ship containerized workloads, and design CI/CD pipelines that turn manual
          chaos into repeatable systems.
          <br /><br />
          My approach blends pragmatic engineering with thoughtful architecture —
          shipping cloud-native solutions on AWS and Azure, automating the boring
          parts, and treating reliability as a first-class feature.
        </motion.p>

        <div className="md:col-span-2 space-y-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-4 shadow-glass flex items-start gap-3 hover:shadow-glow transition-shadow"
            >
              <div className="shrink-0 h-10 w-10 rounded-xl bg-gradient-accent flex items-center justify-center text-white">
                <it.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">{it.title}</div>
                <div className="text-sm text-muted-foreground">{it.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
