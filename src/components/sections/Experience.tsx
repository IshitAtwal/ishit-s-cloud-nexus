import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { BriefcaseBusiness, Check } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const experiences = [
  {
    role: "DevOps Engineer",
    company: "techcadd Mohali",
    period: "Jul 2026 — Present",
    current: true,
    summary: "Full-time ownership of cloud infrastructure, deployment workflows, and production stability.",
    points: ["AWS infrastructure across EC2, S3, IAM, VPC, and CloudWatch", "Linux application delivery with Nginx, Apache, Docker, and PM2", "Kubernetes orchestration and Jenkins CI/CD automation", "Monitoring, troubleshooting, and performance optimisation"],
    tags: ["AWS", "Kubernetes", "Jenkins", "Nginx"],
  },
  {
    role: "Junior Cloud Computing Intern",
    company: "techcadd Mohali",
    period: "Jan 2026 — Jul 2026 · 6 months",
    current: false,
    summary: "Building the hands-on cloud and deployment practice behind my DevOps work.",
    points: ["AWS infrastructure deployment and management across EC2, S3, IAM, VPC, and CloudWatch", "Web application delivery on Linux with Nginx, Apache, and PM2", "Containerising with Docker and orchestrating with Kubernetes", "CI/CD pipelines with Jenkins, Git, and GitHub to automate build, test, and deploy", "Monitoring performance, server health, and logs with CloudWatch", "Cloud architecture setup, deployment automation, and troubleshooting"],
    tags: ["EC2", "Docker", "Jenkins", "Linux"],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export const Experience = () => {
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: railRef, offset: ["start 75%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });

  return (
    <section id="experience" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="02 · Experience"
          title="Practical infrastructure work, end to end."
          subtitle="From a blank server to an observable production environment, each role has been a study in making systems easier to operate."
        />

        <div ref={railRef} className="relative pl-10 sm:pl-16">
          {/* timeline rail */}
          <div className="absolute bottom-2 left-[15px] top-2 w-px bg-white/10 sm:left-[23px]" />
          <motion.div style={{ scaleY: fill }} className="absolute bottom-2 left-[15px] top-2 w-px origin-top bg-gradient-to-b from-cyan-300 via-brand-sky to-fuchsia-400 shadow-[0_0_12px_rgba(139,92,246,0.9)] sm:left-[23px]" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={experience.role} className="relative">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
                  className="absolute -left-10 top-7 grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-[#0b0920] text-brand-sky-soft shadow-[0_0_0_6px_hsl(var(--background))] sm:-left-16 sm:h-12 sm:w-12"
                >
                  {experience.current && <span className="absolute inset-0 animate-ping rounded-full border border-brand-green/50" />}
                  <BriefcaseBusiness className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                </motion.span>

                <motion.article
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.05, ease }}
                  className="section-frame spotlight-card group p-6 transition-colors duration-500 hover:border-brand-sky/35 sm:p-8"
                >
                  <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="eyebrow text-[9px]">{experience.period}</p>
                        {experience.current && (
                          <span className="rounded-full bg-brand-green/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-green">Current</span>
                        )}
                      </div>
                      <h3 className="display-font mt-5 text-2xl font-semibold tracking-[-0.045em] text-white sm:text-3xl">{experience.role}</h3>
                      <p className="mt-1 text-sm text-brand-sky-soft">{experience.company}</p>
                      <p className="mt-5 border-l border-brand-sky/55 pl-4 text-sm leading-6 text-white/63">{experience.summary}</p>
                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {experience.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-medium text-white/70">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <ul className="space-y-3 self-center">
                      {experience.points.map((point, i) => (
                        <motion.li
                          key={point}
                          initial={{ opacity: 0, x: 16 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.25 + i * 0.08, duration: 0.5, ease }}
                          className="flex gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3 text-sm leading-6 text-white/76 transition-colors hover:bg-white/[0.05]"
                        >
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-green/15"><Check className="h-3 w-3 text-brand-green" /></span>
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
