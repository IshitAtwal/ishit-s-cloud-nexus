import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export const SectionHeading = ({ eyebrow, title, subtitle }: Props) => (
  <div className="mb-14 max-w-3xl">
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 terminal-font text-[11px] uppercase tracking-[0.22em] text-brand-sky mb-4"
    >
      {eyebrow}
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.05 }}
      className="text-3xl md:text-5xl font-semibold tracking-tight text-balance"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);
