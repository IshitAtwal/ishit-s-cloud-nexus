import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const experiences = [
  {
    role: "DevOps Engineer",
    company: "techcadd Mohali",
    period: "Jul 2026 — Present (Full Time)",
    points: [
      "Managing AWS infrastructure using EC2, S3, IAM, VPC, and CloudWatch.",
      "Deploying applications on Linux servers with Nginx, Apache, Docker, and PM2.",
      "Implementing Kubernetes for container orchestration and Jenkins-based CI/CD pipelines.",
      "Monitoring, troubleshooting, and optimizing cloud infrastructure and application performance.",
    ],
  },
  {
    role: "Junior Cloud Computing Intern",
    company: "techcadd Mohali",
    period: "Jan 2026 — Jul 2026 (6 Months)",
    points: [
      "Working on AWS cloud infrastructure deployment and management using EC2, S3, IAM, VPC, CloudWatch, and DevOps tools.",
      "Deploying and managing web applications on Linux servers using Nginx, Apache, and PM2.",
      "Containerizing applications using Docker and implementing Kubernetes (K8s) for orchestration and scalability.",
      "Building CI/CD pipelines using Jenkins, Git, and GitHub to automate build, testing, and deployment processes.",
      "Monitoring application performance, server health, and logs using AWS CloudWatch and Linux monitoring tools.",
      "Assisting in cloud architecture setup, deployment automation, and troubleshooting infrastructure issues in AWS environments.",
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="section-padding relative">
    <div className="mx-auto max-w-5xl">
      <SectionHeading
        eyebrow="02 — Experience"
        title="A track record of shipping cloud and DevOps systems."
        subtitle="Hands-on infrastructure work across AWS, Linux, containers, and CI/CD."
      />

      <div className="relative">
        {/* Premium timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/50 to-transparent md:-translate-x-px" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative md:grid md:grid-cols-2 md:gap-16 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              {/* Enhanced timeline dot */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute left-4 md:left-1/2 top-7 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-accent ring-4 ring-background shadow-lg hover:shadow-accent-glow"
              />

              <div className={i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}>
                <div className="pl-12 md:pl-0">
                  <div className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-3.5 py-1.5 terminal-font text-xs uppercase tracking-wider text-transparent bg-gradient-cyan bg-clip-text font-semibold mb-4">
                    {exp.period}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{exp.role}</h3>
                  <div className="mt-2 text-lg text-muted-foreground font-medium">{exp.company}</div>
                </div>
              </div>

              <div className={i % 2 === 0 ? "md:pl-12 mt-6 md:mt-0" : "md:pr-12 mt-6 md:mt-0"}>
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="ml-12 md:ml-0 card-premium p-6 space-y-3 hover:border-white/20 hover:shadow-lg transition-all"
                >
                  <ul className="space-y-3">
                    {exp.points.map((p, idx) => (
                      <motion.li 
                        key={p} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 px-3.5 py-3 text-sm hover:border-white/20 hover:bg-white/10 transition-all"
                      >
                        <Briefcase className="h-4 w-4 mt-0.5 shrink-0 text-gradient-accent" />
                        <span className="text-foreground/90 leading-relaxed">{p}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
