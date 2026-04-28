import { motion } from "framer-motion";

const Cloud = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.svg
    viewBox="0 0 200 120"
    className={className}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay, duration: 1.2 }}
  >
    <defs>
      <linearGradient id={`cg-${delay}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(var(--brand-sky))" stopOpacity="0.5" />
        <stop offset="100%" stopColor="hsl(var(--brand-green))" stopOpacity="0.25" />
      </linearGradient>
    </defs>
    <path
      d="M40 90 Q20 90 20 70 Q20 50 45 50 Q50 30 75 30 Q100 25 110 50 Q140 45 150 70 Q175 70 175 90 Z"
      fill={`url(#cg-${delay})`}
    />
  </motion.svg>
);

export const FloatingClouds = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <Cloud className="absolute top-[8%] left-[5%] w-48 md:w-64 animate-float-slow" delay={0.2} />
    <Cloud className="absolute top-[20%] right-[8%] w-40 md:w-56 animate-float" delay={0.5} />
    <Cloud className="absolute bottom-[15%] left-[15%] w-36 md:w-52 animate-float-slow" delay={0.8} />
    <Cloud className="absolute bottom-[25%] right-[20%] w-44 md:w-60 animate-float" delay={1.1} />
  </div>
);
