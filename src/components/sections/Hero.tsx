import { motion } from "framer-motion";
import { ArrowDown, Download, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TerminalBackground } from "../TerminalBackground";
import { FloatingClouds } from "../FloatingClouds";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero pt-24"
    >
      <TerminalBackground />
      <FloatingClouds />

      {/* glow blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-brand-sky/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-brand-green/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs md:text-sm font-medium mb-8 shadow-glass"
        >
          <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse-glow" />
          <span className="text-muted-foreground">Available for opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]"
        >
          <span className="block">ISHIT</span>
          <span className="block text-gradient">ATWAL</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 text-base md:text-lg font-medium text-foreground/80 terminal-font"
        >
          DevOps Engineer <span className="text-brand-sky">|</span> Cloud & Infrastructure Specialist
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-5 text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto"
        >
          Building <span className="text-foreground font-semibold">scalable</span>, <span className="text-foreground font-semibold">automated</span>, and <span className="text-foreground font-semibold">reliable</span> cloud systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gradient-accent text-white border-0 hover:opacity-95 shadow-accent-glow"
          >
            <a href="#projects">
              <FolderGit2 className="mr-2 h-4 w-4" /> View Projects
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full glass hover:bg-secondary/40"
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5 animate-float" />
        </motion.a>
      </div>
    </section>
  );
};
