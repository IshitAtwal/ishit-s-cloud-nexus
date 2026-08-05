import { motion } from "framer-motion";
import { ArrowDown, FileDown, FolderGit2, MoveRight, ServerCog, Workflow, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TerminalBackground } from "../TerminalBackground";
import { cn } from "@/lib/utils";

const leftTags = ["AWS ENGINEER", "LINUX SERVERS", "DEVOPS ENGINEER"];
const rightTags = ["KUBERNETES", "JENKINS CI/CD", "MONITORING", "DOCKER", "VPC / IAM"];

const serviceCards = [
  {
    icon: ServerCog,
    title: "Infrastructure",
    desc: "AWS EC2, VPC, S3, IAM, CloudWatch, CloudTrail",
  },
  {
    icon: Workflow,
    title: "Delivery",
    desc: "Jenkins pipelines, GitHub Actions, Docker, PM2",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    desc: "Nginx, Apache, Kubernetes, alerts, troubleshooting",
  },
];

const galleryTiles = [
  {
    title: "AWS Infra",
    subtitle: "EC2, VPC, IAM",
    className: "bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.55),transparent_30%),linear-gradient(135deg,#08111f_0%,#0b2a5c_48%,#02050f_100%)]",
  },
  {
    title: "CI/CD",
    subtitle: "Jenkins, GitHub Actions",
    className: "bg-[radial-gradient(circle_at_70%_20%,rgba(34,197,94,0.55),transparent_26%),linear-gradient(135deg,#05111f_0%,#0f172a_46%,#030712_100%)]",
  },
  {
    title: "Containers",
    subtitle: "Docker, Kubernetes",
    className: "bg-[radial-gradient(circle_at_35%_30%,rgba(59,130,246,0.45),transparent_30%),linear-gradient(135deg,#09111c_0%,#14213d_50%,#02050f_100%)]",
  },
  {
    title: "Monitoring",
    subtitle: "CloudWatch, Grafana",
    className: "bg-[radial-gradient(circle_at_60%_25%,rgba(16,185,129,0.45),transparent_26%),linear-gradient(135deg,#07121b_0%,#0a1e2f_54%,#02050f_100%)]",
  },
];

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#02050f] pt-24"
    >
      <TerminalBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-6rem)] items-center py-6">
          <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-[#050817]/92 shadow-[0_40px_120px_-30px_rgba(8,47,129,0.85)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_30%,rgba(37,99,235,0.8),transparent_28%),radial-gradient(circle_at_68%_78%,rgba(14,165,233,0.55),transparent_22%),radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_20%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(8,12,24,0.15),rgba(0,0,0,0.75))]" />

            <div className="relative p-5 sm:p-6 lg:p-8 xl:px-10 xl:py-7">
              <div className="flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.28em] text-white/70">
                <div className="flex items-center gap-3">
                  <div className="text-white/90 font-semibold tracking-[0.18em]">ISHIT</div>
                  <div className="hidden md:flex items-center gap-2 text-brand-green lowercase tracking-normal">
                    <span className="h-2 w-2 rounded-full bg-brand-green" />
                    available for work
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-8 text-white/80">
                  <span>Self</span>
                  <span>Service</span>
                  <span>Blog</span>
                </div>
                <a href="#contact" className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-white/90 transition-colors hover:bg-white/12">
                  Hire Me
                </a>
              </div>

              <div className="mt-10 grid gap-8 xl:grid-cols-[0.95fr_1.1fr_0.95fr] xl:items-center">
                <div className="hidden xl:flex flex-col gap-3 self-start pt-24">
                  {leftTags.map((tag) => (
                    <div key={tag} className="w-fit rounded-full border border-white/12 bg-white/7 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                      {tag}
                    </div>
                  ))}
                </div>

                <div className="relative px-2 sm:px-6 xl:px-0 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="mx-auto max-w-4xl"
                  >
                    <div className="text-[11px] sm:text-sm uppercase tracking-[0.35em] text-white/70">DevOps Engineer</div>
                    <h1 className="mt-4 text-[clamp(4rem,13vw,10rem)] leading-[0.9] font-black tracking-[-0.08em] text-transparent bg-[linear-gradient(180deg,#ffffff_0%,#8dc9ff_42%,#2f78ff_100%)] bg-clip-text drop-shadow-[0_8px_32px_rgba(59,130,246,0.45)]">
                      ISHIT ATWAL
                    </h1>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.25 }}
                    className="mx-auto mt-8 w-full max-w-[50rem] rounded-[2rem] bg-white text-slate-900 shadow-[0_30px_80px_-24px_rgba(15,23,42,0.8)] overflow-hidden"
                  >
                    <div className="p-5 sm:p-6">
                      <div className="rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(3,7,18,0.98),rgba(9,14,30,0.95))] p-4 sm:p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
                        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr] sm:items-start">
                          <div className="overflow-hidden rounded-[1rem] bg-slate-950 p-2">
                            <div className="grid grid-cols-2 gap-2">
                              {galleryTiles.map((tile, index) => (
                                <div
                                  key={tile.title}
                                  className={cn(
                                    "relative aspect-[4/3] overflow-hidden rounded-[0.85rem] border border-white/8 p-3 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]",
                                    tile.className,
                                    index === 0 ? "col-span-2 aspect-[16/9]" : ""
                                  )}
                                >
                                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_40%,rgba(0,0,0,0.35))]" />
                                  <div className="relative flex h-full flex-col justify-between">
                                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-white/65">
                                      <span>{tile.subtitle}</span>
                                      <span>{String(index + 1).padStart(2, "0")}</span>
                                    </div>
                                    <div>
                                      <div className="h-12 w-12 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm" />
                                      <div className="mt-3 text-sm font-semibold tracking-wide">{tile.title}</div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="text-left text-white/78">
                            <p className="text-xs uppercase tracking-[0.28em] text-white/40">Cloud / DevOps</p>
                            <p className="mt-3 text-sm leading-relaxed text-white/72">
                              I design infrastructure, automate delivery, and keep production stable with AWS, Linux, Docker, Kubernetes, and Jenkins.
                            </p>
                            <div className="mt-4 space-y-2">
                              {serviceCards.map((card) => (
                                <div key={card.title} className="rounded-2xl border border-white/8 bg-white/5 p-3">
                                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-brand-sky mb-1">
                                    <card.icon className="h-3.5 w-3.5" />
                                    {card.title}
                                  </div>
                                  <div className="text-sm text-white/74 leading-relaxed">{card.desc}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 grid gap-2 text-left text-[10px] uppercase tracking-[0.26em] text-white/42 sm:grid-cols-2">
                          <div className="rounded-full border border-white/8 bg-white/5 px-3 py-2">AWS / EC2 / VPC / IAM</div>
                          <div className="rounded-full border border-white/8 bg-white/5 px-3 py-2">Docker / Kubernetes / ECS</div>
                          <div className="rounded-full border border-white/8 bg-white/5 px-3 py-2">Jenkins / GitHub Actions</div>
                          <div className="rounded-full border border-white/8 bg-white/5 px-3 py-2">Nginx / Apache / PM2</div>
                        </div>
                      </div>
                      <div className="mt-4 text-left text-[11px] uppercase tracking-[0.22em] text-slate-500">
                        I build repeatable deployment systems and reliable cloud platforms for production workloads.
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.45 }}
                    className="mt-8 flex flex-wrap items-center justify-center gap-3"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full bg-white text-slate-950 border-0 hover:bg-white/90 shadow-[0_18px_60px_-24px_rgba(255,255,255,0.5)]"
                    >
                      <a href="#projects">
                        View Projects
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="rounded-full border-white/15 bg-white/7 text-white hover:bg-white/12"
                    >
                      <a href="/resume.html" download="Ishit_Atwal_CV.html">
                        <FileDown className="mr-2 h-4 w-4" /> Download CV
                      </a>
                    </Button>
                    <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/8 transition-colors">
                      Get in touch <MoveRight className="h-4 w-4" />
                    </a>
                  </motion.div>

                  <div className="mt-8 flex items-center justify-between gap-4 text-left text-white/82">
                    <div>
                      <div className="text-sm font-semibold">Trustpilot</div>
                      <div className="mt-1 text-xs text-white/60">★★★★★ 4.8 (20+ reviews)</div>
                    </div>
                    <div className="hidden sm:block text-right">
                      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/72">Open to</div>
                      <div className="mt-1 text-xs text-white/60">DevOps, Cloud, and Platform roles</div>
                    </div>
                  </div>
                </div>

                <div className="hidden xl:flex flex-col gap-3 self-start pt-24 items-end text-right">
                  {rightTags.map((tag, index) => (
                    <div
                      key={tag}
                      className={cn(
                        "w-fit rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.2em] backdrop-blur-sm",
                        index === 0 ? "border border-white/12 bg-white/7 text-white/88" : "text-white/64"
                      )}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-5 w-5 animate-float" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};
