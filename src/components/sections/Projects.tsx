import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "../SectionHeading";

const projects = [
  {
    title: "Three-Tier Web Application Deployment",
    desc: "Production-grade three-tier architecture with load balancing, auto-scaling, and high availability across AZs.",
    stack: ["AWS", "EC2", "RDS", "ELB", "Terraform"],
  },
  {
    title: "Cloud Storage Integration (S3)",
    desc: "Secure, versioned object storage with lifecycle policies, presigned URLs, and CloudFront edge delivery.",
    stack: ["AWS S3", "IAM", "CloudFront", "Node.js"],
  },
  {
    title: "Cloud Healthcare System",
    desc: "HIPAA-conscious patient records platform with encrypted storage, audit logs, and role-based access control.",
    stack: ["AWS", "PostgreSQL", "Docker", "Nginx"],
  },
  {
    title: "Django Notes App (Docker)",
    desc: "Containerized Django notes application with multi-stage builds, persistent volumes, and CI/CD via GitHub Actions.",
    stack: ["Django", "Docker", "PostgreSQL", "GitHub Actions"],
  },
];

export const Projects = () => (
  <section id="projects" className="section-padding bg-muted/30 relative">
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="04 — Projects"
        title="Selected work from the lab."
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
            className="group relative glass rounded-3xl p-6 shadow-glass overflow-hidden hover:shadow-glow transition-all"
          >
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-brand-sky/0 group-hover:bg-brand-sky/15 blur-3xl transition-all duration-700" />

            <div className="relative">
              <div className="terminal-font text-[11px] text-brand-green mb-2">
                project_{String(i + 1).padStart(2, "0")}.tf
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-gradient transition-all">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="terminal-font text-[11px] px-2 py-0.5 rounded-md bg-secondary/60 border border-border text-foreground/80"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" className="rounded-full">
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
