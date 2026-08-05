import { motion } from "framer-motion";
import { ArrowDown, MoveRight } from "lucide-react";
import { TerminalBackground } from "../TerminalBackground";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-hero pt-32"
    >
      <TerminalBackground />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center">
          <div className="w-full">
            {/* Hero Content */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="inline-block mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
                  <span className="text-sm text-transparent bg-gradient-cyan bg-clip-text">
                    ✨ DevOps Engineer & Cloud Architect
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="display-font text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.95] tracking-[-0.03em]"
              >
                <span className="text-gradient">ISHIT</span>
                <br />
                <span className="text-white">ATWAL</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
              >
                Building reliable cloud infrastructure with AWS, Docker, and Kubernetes. Specializing in DevOps automation and infrastructure as code.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-4 mb-16"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ y: -4 }}
                  whileTap={{ y: 0 }}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-accent px-8 py-3 text-white font-semibold shadow-lg hover:shadow-accent-glow transition-all"
                >
                  View Projects
                  <ArrowDown className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ y: -4 }}
                  whileTap={{ y: 0 }}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-3 text-white font-semibold hover:bg-white/10 transition-all"
                >
                  Get in Touch
                  <MoveRight className="h-4 w-4" />
                </motion.a>
              </motion.div>
            </div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            >
              {[
                { label: "AWS Expertise", value: "5+ Years" },
                { label: "Infrastructure", value: "20+ Projects" },
                { label: "Uptime Record", value: "99.9%" },
                { label: "Team Reviews", value: "★★★★★" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="group card-premium p-4 md:p-6 text-center"
                >
                  <div className="text-lg md:text-2xl font-bold text-transparent bg-gradient-cyan bg-clip-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <a href="#about" className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </motion.div>
    </section>
  );
};

