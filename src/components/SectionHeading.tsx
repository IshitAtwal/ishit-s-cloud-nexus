import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export const SectionHeading = ({ eyebrow, title, subtitle }: Props) => (
  <div className="mb-16 max-w-3xl">
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-3.5 py-1.5 terminal-font text-xs uppercase tracking-wider text-transparent bg-gradient-cyan bg-clip-text font-semibold mb-6"
    >
      {eyebrow}
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.05 }}
      className="display-font text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);
