import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
        <div className={cn(
          "mx-auto max-w-6xl px-4 md:px-6 transition-all",
        )}>
          <div className={cn(
            "flex items-center justify-between rounded-full px-4 md:px-6 py-2.5 transition-all",
            scrolled ? "glass shadow-glass" : "bg-transparent"
          )}>
            <a href="#home" className="flex items-center gap-2 font-bold tracking-tight">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-green animate-pulse-glow" />
              <span className="text-gradient">ishit.dev</span>
            </a>
            <nav className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Scroll progress */}
      <div className="fixed top-0 inset-x-0 z-[60] h-[2px] bg-transparent">
        <div
          className="h-full bg-gradient-accent transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );
};
