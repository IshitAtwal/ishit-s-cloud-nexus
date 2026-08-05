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
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled ? "py-2" : "py-4"
        )}
      >
        <div className={cn("mx-auto max-w-7xl px-4 md:px-6 transition-all")}>
          <div
            className={cn(
              "flex items-center justify-between gap-4 rounded-2xl px-5 md:px-7 py-3 transition-all duration-300",
              scrolled 
                ? "glass shadow-md border border-white/10" 
                : "bg-transparent border border-transparent"
            )}
          >
            <div className="flex items-center gap-4 md:gap-6 min-w-0">
              <a href="#home" className="flex items-center gap-2 font-bold tracking-tight shrink-0 hover:opacity-80 transition-opacity">
                <span className="h-2.5 w-2.5 rounded-full bg-gradient-accent animate-pulse" />
                <span className="bg-gradient-text bg-clip-text text-transparent">ISHIT</span>
              </a>
              <div className="hidden sm:flex items-center gap-2 text-xs md:text-sm">
                <span className="text-brand-cyan font-medium">Available</span>
                <span className="text-muted-foreground">for work</span>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm px-3.5 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-200"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3 shrink-0">
              <ThemeToggle />
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-accent px-5 py-2 text-sm font-semibold text-white shadow-lg hover:shadow-accent-glow transition-all"
              >
                Contact
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="fixed top-0 inset-x-0 z-[60] h-1 bg-transparent">
        <motion.div
          className="h-full bg-gradient-accent"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.15 }}
        />
      </div>
    </>
  );
};
