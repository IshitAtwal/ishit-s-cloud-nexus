import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Check } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const experiences = [
  {
    role: "DevOps Engineer",
    company: "techcadd Mohali",
    period: "Jul 2026 — Present",
    summary: "Owning cloud infrastructure, deployment workflows, and production stability.",
    points: ["AWS infrastructure across EC2, S3, IAM, VPC, and CloudWatch", "Linux application delivery with Nginx, Apache, Docker, and PM2", "Kubernetes orchestration and Jenkins CI/CD automation", "Monitoring, troubleshooting, and performance optimisation"],
  },
  {
    role: "Junior Cloud Computing Intern",
    company: "techcadd Mohali",
    period: "Jan 2026 — Jul 2026",
    summary: "Building the hands-on cloud and deployment practice behind my DevOps work.",
    points: ["AWS resource deployment and cloud environment management", "Containerising applications with Docker and Kubernetes", "Automating builds and releases with Jenkins, Git, and GitHub", "Monitoring services, logs, and server health"],
  },
];

export const Experience = () => (
  <section id="experience" className="section-padding relative">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="02 · Experience"
        title="Practical infrastructure work, end to end."
        subtitle="From a blank server to an observable production environment, each role has been a study in making systems easier to operate."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.role}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: index * 0.09 }}
            className="section-frame min-h-full p-6 sm:p-8"
          >
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow text-[9px]">{experience.period}</p>
                <h3 className="display-font mt-5 text-2xl font-semibold tracking-[-0.045em] text-white">{experience.role}</h3>
                <p className="mt-1 text-sm text-brand-sky-soft">{experience.company}</p>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.045] text-white/70"><BriefcaseBusiness className="h-4 w-4" /></span>
            </div>
            <p className="relative mt-6 border-l border-brand-sky/55 pl-4 text-sm leading-6 text-white/63">{experience.summary}</p>
            <ul className="relative mt-7 space-y-3">
              {experience.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-6 text-white/74">
                  <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-green" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="relative mt-8 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
              <span>Role archive</span><ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
