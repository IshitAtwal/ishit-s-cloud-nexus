import { motion } from "framer-motion";
import { BriefcaseBusiness, Download, Eye, FileText, GraduationCap, Layers3, MapPin } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { TiltCard } from "../TiltCard";
import { Magnetic } from "../Magnetic";
import { profile } from "@/lib/profile";
import cvPreview from "@/assets/cv-preview.webp";

const facts = [
  { icon: BriefcaseBusiness, label: "Current role", value: "DevOps Engineer · techcadd Mohali", detail: "Full time · Jul 2026 — Present" },
  { icon: GraduationCap, label: "Education", value: "B.Tech in Computer Science", detail: "GNA University, Phagwara · 2022–2026" },
  { icon: Layers3, label: "Core stack", value: "AWS · Kubernetes · Terraform · Jenkins", detail: "Plus Azure, GCP, Docker, Ansible and more" },
  { icon: MapPin, label: "Location", value: "Mohali, Punjab, India", detail: "Open to on-site and remote roles" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export const Resume = () => (
  <section id="resume" className="section-padding relative">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="06 · Resume"
        title="Everything on one page."
        subtitle="My experience, projects, and full technical toolkit in a single PDF. Preview it here, open it, or download a copy."
      />

      <div className="section-frame grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:p-12">
        {/* Document preview */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -4 }}
          whileInView={{ opacity: 1, y: 0, rotate: -2 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-4 -z-10 translate-x-4 translate-y-4 rotate-3 rounded-2xl border border-white/10 bg-white/[0.04]" />
          <div className="absolute -inset-6 -z-20 rounded-full bg-brand-sky/20 blur-3xl" />
          <TiltCard className="rounded-2xl">
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open CV in a new tab"
              className="group/cv relative block overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]"
            >
              <img
                src={cvPreview}
                alt="Preview of Ishit Atwal's CV"
                width={935}
                height={1210}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full transition-transform duration-700 group-hover/cv:scale-[1.03]"
              />
              <span className="cv-scan pointer-events-none absolute inset-x-0 top-0 h-24" />
              <span className="absolute inset-0 grid place-items-center bg-[#0b0920]/0 transition-colors duration-300 group-hover/cv:bg-[#0b0920]/55">
                <span className="flex translate-y-3 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-[#140b55] opacity-0 shadow-lg transition-all duration-300 group-hover/cv:translate-y-0 group-hover/cv:opacity-100">
                  <Eye className="h-4 w-4" /> Open full CV
                </span>
              </span>
            </a>
          </TiltCard>
          <motion.span
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 14 }}
            className="absolute -right-3 -top-3 flex items-center gap-1.5 rounded-full bg-gradient-accent px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_0_30px_-6px_rgba(139,92,246,0.8)]"
          >
            <FileText className="h-3 w-3" /> PDF · 1 page
          </motion.span>
        </motion.div>

        {/* Quick facts + actions */}
        <div className="relative">
          <div className="grid gap-3 sm:grid-cols-2">
            {facts.map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.08, ease }}
                className="spotlight-card group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-brand-sky/40"
              >
                <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-brand-green">
                  <fact.icon className="h-3.5 w-3.5 transition-transform duration-500 group-hover:scale-125" /> {fact.label}
                </div>
                <p className="mt-2 text-sm font-semibold text-white">{fact.value}</p>
                <p className="mt-1 text-xs text-white/48">{fact.detail}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Magnetic>
              <a href={profile.cv} download={profile.cvFileName} className="shine inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-[#140b55] shadow-[0_12px_48px_-12px_rgba(203,191,255,0.8)]">
                <Download className="h-4 w-4" /> Download PDF
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 text-sm font-bold text-white transition-colors hover:bg-white/10">
                <Eye className="h-4 w-4" /> View online
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-white/55"
          >
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">LinkedIn ↗</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">GitHub ↗</a>
            <a href={`mailto:${profile.email}`} className="transition-colors hover:text-white">{profile.email}</a>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
