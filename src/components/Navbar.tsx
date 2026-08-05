import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#terminal", label: "Terminal" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled ? "py-2" : "py-4"
        )}
      >
        <div className={cn("mx-auto max-w-7xl px-4 md:px-6 transition-all")}>
          <div
            className={cn(
              "flex items-center justify-between gap-4 rounded-full px-4 md:px-6 py-2.5 transition-all",
              scrolled ? "glass shadow-glass" : "bg-transparent"
            )}
          >
            <div className="flex items-center gap-4 md:gap-6 min-w-0">
              <a href="#home" className="flex items-center gap-2 font-bold tracking-tight shrink-0">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-green animate-pulse-glow" />
                <span className="text-gradient">ishitatwal.me</span>
              </a>
              <div className="hidden sm:flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                <span className="text-brand-green">Available for work</span>
                <span className="opacity-60">Follow</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-black/10 p-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/8 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 shrink-0">
              <ThemeToggle />
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#0b1020] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(255,255,255,0.25)] transition-transform hover:-translate-y-0.5"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="fixed top-0 inset-x-0 z-[60] h-[2px] bg-transparent">
        <div
          className="h-full bg-gradient-accent transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );
};
