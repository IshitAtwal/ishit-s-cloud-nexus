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
  <section id="projects" className="section-padding bg-muted/30 relative">
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="04 — Projects"
        title="Selected deployments presented like product cards."
      />

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-glass hover:border-sky-400/30 hover:shadow-[0_24px_80px_-30px_rgba(59,130,246,0.45)] transition-all"
          >
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-brand-sky/0 group-hover:bg-brand-sky/15 blur-3xl transition-all duration-700" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="relative">
              <div className="terminal-font text-[11px] text-brand-sky mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                project_{String(i + 1).padStart(2, "0")}.tf
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-gradient transition-all">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="terminal-font text-[11px] px-2 py-0.5 rounded-full bg-black/20 border border-white/10 text-foreground/80"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10">
                  <Github className="h-3.5 w-3.5 mr-1.5" /> GitHub
                </Button>
                <Button size="sm" className="rounded-full bg-gradient-accent text-white border-0 hover:opacity-95">
                  <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> Demo
                </Button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
