import { motion } from "framer-motion";
import { ArrowUpRight, Boxes, Globe2, Layers3, LockKeyhole } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { TiltCard } from "../TiltCard";

const projects = [
  {
    title: "Virtual Academy",
    type: "Application delivery",
    desc: "Deployed the Virtual Academy application on AWS EC2 with Linux, Nginx, and PM2.",
    stack: ["AWS EC2", "Linux", "Nginx", "PM2"],
    icon: Globe2,
    accent: "from-[#6144f5] via-[#2d2598] to-[#09061c]",
  },
  {
    title: "Cloud Healthcare",
    type: "Cloud application",
    desc: "Developed and deployed a healthcare management system with AWS, Node.js, and MongoDB.",
    stack: ["AWS", "Node.js", "MongoDB", "Linux"],
    icon: LockKeyhole,
    accent: "from-[#168cc6] via-[#2548a2] to-[#09061c]",
  },
  {
    title: "Django Notes",
    type: "Container platform",
    desc: "Containerised and deployed a Django Notes application for consistent, scalable releases.",
    stack: ["Django", "Docker", "Deployment"],
    icon: Boxes,
    accent: "from-[#8153e7] via-[#37309a] to-[#09061c]",
  },
  {
    title: "Sanjh Kitab Ghar",
    type: "Live production site",
    desc: "Managed a live EC2 deployment with domain hosting, reverse proxy, SSL, and PM2.",
    stack: ["AWS EC2", "Nginx", "SSL", "PM2"],
    icon: Layers3,
    accent: "from-[#00a9bb] via-[#2349ad] to-[#09061c]",
  },
];

export const Projects = () => (
  <section id="projects" className="section-padding relative">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="04 · Selected work"
        title="Deployment stories, designed as systems."
        subtitle="A selection of the environments I have configured, automated, and supported from infrastructure to live release."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.07 }}
          >
            <TiltCard className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0a0718] shadow-card transition-colors duration-500 hover:border-brand-sky/40">
            <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.accent} p-5 sm:h-60`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.34),transparent_6%),radial-gradient(circle_at_24%_108%,rgba(139,113,255,0.72),transparent_42%)]" />
              <div className="absolute -bottom-12 left-1/2 h-40 w-[115%] -translate-x-1/2 rounded-[50%] border border-white/40 bg-[#08060e]/95 shadow-[0_-16px_42px_rgba(184,151,255,0.52)]" />
              <div className="relative flex items-start justify-between">
                <span className="rounded-full border border-white/20 bg-black/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/78 backdrop-blur-sm">{project.type}</span>
                <span className="terminal-font text-xs text-white/65">/{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="relative mt-10 grid h-14 w-14 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6 place-items-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-[0_10px_30px_rgba(9,5,29,0.26)] backdrop-blur-md">
                <project.icon className="h-6 w-6" />
              </div>
            </div>

            <div className="p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="display-font text-2xl font-semibold tracking-[-0.045em] text-white">{project.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-white/56">{project.desc}</p>
                </div>
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-white/48 transition-all group-hover:border-brand-green/50 group-hover:text-brand-green"><ArrowUpRight className="h-4 w-4" /></span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-1 text-[10px] font-medium text-white/68">{item}</span>)}
              </div>
              <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.17em] text-brand-sky-soft transition-colors hover:text-white">Discuss this build <ArrowUpRight className="h-3.5 w-3.5" /></a>
            </div>
            </TiltCard>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
