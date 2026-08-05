import { motion } from "framer-motion";

const gridLines = Array.from({ length: 8 }, (_, i) => i);

export const TerminalBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_75%_20%,rgba(34,197,94,0.12),transparent_25%),radial-gradient(circle_at_bottom,rgba(2,6,23,0.92),rgba(2,6,23,1)_72%)]" />

      <div className="absolute inset-0 opacity-[0.18] dark:opacity-[0.28]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <motion.div
        className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, 18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-24 right-0 h-96 w-96 rounded-full bg-emerald-400/12 blur-3xl"
        animate={{ x: [0, -24, 0], y: [0, 10, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-4rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-indigo-500/12 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.42, 0.65, 0.42] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
      <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="absolute inset-0 opacity-30 dark:opacity-40">
        {gridLines.map((i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-300/10 to-transparent"
            style={{ top: `${12 + i * 11}%` }}
            animate={{ opacity: [0.06, 0.16, 0.06], x: [0, 14, 0] }}
            transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>
  );
};
