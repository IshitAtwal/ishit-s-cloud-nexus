import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "../SectionHeading";

const projects = [
  {
    title: "Virtual Academy Web Application Deployment",
    desc: "Deployed the Virtual Academy web application on AWS EC2 using Linux, Nginx, and PM2.",
    stack: ["AWS EC2", "Linux", "Nginx", "PM2"],
  },
  {
    title: "Cloud Healthcare Management System",
    desc: "Developed and deployed a cloud-based healthcare management system using AWS, Linux, Node.js, and MongoDB.",
    stack: ["AWS", "Linux", "Node.js", "MongoDB"],
  },
  {
    title: "Django Notes App Deployment",
    desc: "Containerized and deployed a Django Notes application using Docker for consistent and scalable deployment.",
    stack: ["Django", "Docker", "Deployment"],
  },
  {
    title: "Sanjh Kitab Ghar (Live Project)",
    desc: "Deployed and managed the Sanjh Kitab Ghar web application on AWS EC2 using Linux, Nginx, and PM2, with domain hosting, reverse proxy, and SSL.",
    stack: ["AWS EC2", "Linux", "Nginx", "SSL"],
  },
];

export const Projects = () => (
  <section id="projects" className="section-padding relative">
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="04 — Projects"
        title="Selected deployments with real impact."
        subtitle="Infrastructure projects that scale and stabilize production systems."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ y: -8, rotateX: 2 }}
            className="group card-premium p-7 hover:border-white/20 hover:shadow-lg transition-all"
          >
            {/* Dynamic glow */}
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-accent/0 group-hover:bg-gradient-accent/15 blur-3xl transition-all duration-700 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="relative">
              <div className="terminal-font text-xs text-transparent bg-gradient-cyan bg-clip-text mb-3 flex items-center gap-2 font-semibold">
                <span className="h-2 w-2 rounded-full bg-gradient-accent" />
                {`project_${String(i + 1).padStart(2, "0")}`}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="terminal-font text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/15 text-foreground/80 hover:border-white/30 hover:bg-white/10 transition-all"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Button size="sm" variant="outline" className="rounded-lg bg-white/5 border-white/15 hover:bg-white/10 hover:border-white/20">
                  <Github className="h-4 w-4 mr-2" /> GitHub
                </Button>
                <Button size="sm" className="rounded-lg bg-gradient-accent text-white border-0 hover:shadow-accent-glow transition-all">
                  <ExternalLink className="h-4 w-4 mr-2" /> Demo
                </Button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
