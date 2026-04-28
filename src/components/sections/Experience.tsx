import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const experiences = [
  {
    role: "Junior Cloud Computing Intern",
    company: "Techcadd",
    period: "Jan 2026 — Present",
    points: [
      "AWS — EC2, S3, IAM, VPC, CloudWatch",
      "Containerization with Docker & Kubernetes",
      "CI/CD pipelines using Jenkins & GitHub Actions",
      "Linux deployments with Nginx, Apache, PM2",
    ],
  },
  {
    role: "Trainee",
    company: "Techcadd",
    period: "Jun 2025 — Aug 2025",
    points: [
      "Designed three-tier architectures",
      "Hands-on with AWS and Azure services",
      "Configured DNS routing and S3 storage",
    ],
  },
  {
    role: "Trainee",
    company: "O7 Solutions",
    period: "May 2024 — Jul 2024",
    points: [
      "Deployed Node.js applications to production",
      "Provisioned infrastructure on AWS EC2 & S3",
      "Implemented Git-based deployment workflows",
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="section-padding bg-muted/30 relative">
    <div className="mx-auto max-w-5xl">
      <SectionHeading
        eyebrow="02 — Experience"
        title="A track record of shipping infrastructure."
      />

      <div className="relative">
        {/* timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-sky/40 via-brand-green/40 to-transparent md:-translate-x-px" />

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
                  <div className="terminal-font text-xs text-brand-sky mb-1">{exp.period}</div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <div className="text-muted-foreground">{exp.company}</div>
                </div>
              </div>

              <div className={i % 2 === 0 ? "md:pl-8 mt-4 md:mt-0" : "md:pr-8 mt-4 md:mt-0 md:text-right"}>
                <div className="ml-12 md:ml-0 glass rounded-2xl p-5 shadow-glass">
                  <ul className="space-y-2">
                    {exp.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
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
