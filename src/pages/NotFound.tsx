import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => (
  <main className="hero-bg relative grid min-h-[100svh] place-items-center overflow-hidden px-5 text-center">
    <div className="hero-stars absolute inset-0 opacity-70" />
    <div className="relative">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="eyebrow"
      >
        Error 404 · route not found
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="display-font shimmer-text mt-6 text-[clamp(6rem,22vw,12rem)] font-bold leading-none tracking-[-0.06em]"
      >
        404
      </motion.h1>
      <p className="terminal-font mt-4 text-sm text-white/60">
        <span className="text-terminal-prompt">ishit@cloud</span>:~$ curl {window.location.pathname} → <span className="text-red-300">no such resource</span>
      </p>
      <a
        href="/"
        className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-[#140b55] transition-transform hover:-translate-y-0.5"
      >
        <ArrowLeft className="h-4 w-4" /> Back to home
      </a>
    </div>
  </main>
);

export default NotFound;
