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
        {/* timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-sky/30 via-brand-green/50 to-transparent md:-translate-x-px" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              {/* dot */}
              <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-3 w-3 rounded-full bg-brand-green ring-4 ring-background shadow-accent-glow" />

              <div className={i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}>
                <div className="pl-12 md:pl-0">
                  <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 terminal-font text-[11px] uppercase tracking-[0.2em] text-brand-sky mb-3">
                    {exp.period}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">{exp.role}</h3>
                  <div className="mt-1 text-muted-foreground">{exp.company}</div>
                </div>
              </div>

              <div className={i % 2 === 0 ? "md:pl-8 mt-4 md:mt-0" : "md:pr-8 mt-4 md:mt-0 md:text-right"}>
                <div className="ml-12 md:ml-0 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-md">
                  <ul className="space-y-3">
                    {exp.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 rounded-2xl border border-white/5 bg-black/10 px-3 py-3 text-sm text-muted-foreground">
                        <Briefcase className="h-3.5 w-3.5 mt-1 shrink-0 text-brand-green" />
                        <span className="text-foreground/90">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
