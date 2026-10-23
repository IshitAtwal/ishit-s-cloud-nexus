import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, FileText, FolderGit2, House, Layers3, Mail, UserRound, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type DockLink = { href: string; label: string; icon: LucideIcon; desktopOnly?: boolean };

const links: DockLink[] = [
  { href: "#home", label: "Home", icon: House, desktopOnly: true },
  { href: "#about", label: "Profile", icon: UserRound },
  { href: "#experience", label: "Experience", icon: BriefcaseBusiness },
  { href: "#skills", label: "Stack", icon: Layers3 },
  { href: "#projects", label: "Work", icon: FolderGit2 },
  { href: "#resume", label: "Resume", icon: FileText },
  { href: "#contact", label: "Contact", icon: Mail },
];

const spring = { type: "spring" as const, stiffness: 420, damping: 34 };

/**
 * Icon dock whose active item morphs from a circle into a labelled pill while a shared
 * white surface slides between items. Inactive items show their label on hover/focus.
 */
const MorphingDock = ({ active, placement }: { active: string; placement: "top" | "bottom" }) => (
  <nav
    aria-label="Sections"
    className="flex items-center gap-1 rounded-full border border-white/10 bg-[#0b0920]/85 p-1.5 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.9)] backdrop-blur-xl"
  >
    {links.map((link) => {
      const isActive = active === link.href;
      return (
        <motion.a
          key={link.href}
          href={link.href}
          layout
          transition={spring}
          initial="rest"
          animate="rest"
          whileHover="hover"
          whileFocus="hover"
          whileTap={{ scale: 0.92 }}
          aria-label={link.label}
          aria-current={isActive ? "true" : undefined}
          className={cn(
            "group relative flex h-9 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-brand-sky sm:h-10",
            isActive ? "gap-2 pl-3 pr-4" : "w-9 bg-white/[0.06] hover:bg-white/[0.12] sm:w-10",
            link.desktopOnly && "hidden lg:flex"
          )}
        >
          {isActive && (
            <motion.span
              layoutId={`dock-surface-${placement}`}
              transition={spring}
              className="absolute inset-0 rounded-full bg-white shadow-[0_6px_24px_-6px_rgba(167,139,250,0.9)]"
            />
          )}

          <motion.span
            variants={{ rest: { scale: 1, y: 0, rotate: 0 }, hover: { scale: 1.2, y: -1, rotate: isActive ? 0 : -8 } }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
            className={cn("relative grid place-items-center", isActive ? "text-[#140b55]" : "text-white/75 group-hover:text-white")}
          >
            <link.icon className="h-4 w-4" />
          </motion.span>

          <AnimatePresence initial={false}>
            {isActive && (
              <motion.span
                key="label"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={spring}
                className="relative overflow-hidden whitespace-nowrap text-[13px] font-extrabold text-[#140b55]"
              >
                {link.label}
              </motion.span>
            )}
          </AnimatePresence>

          {!isActive && (
            <span
              className={cn(
                "pointer-events-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#0b0920] px-2 py-1 text-[11px] font-semibold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 group-focus-visible:opacity-100",
                placement === "top" ? "top-full mt-2 -translate-y-1 group-hover:translate-y-0" : "bottom-full mb-2 translate-y-1 group-hover:translate-y-0"
              )}
            >
              {link.label}
            </span>
          )}
        </motion.a>
      );
    })}
  </nav>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(`#${entry.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((link) => {
      const el = document.getElementById(link.href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6"
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border px-4 py-2 transition-all duration-500 sm:px-5",
            scrolled
              ? "border-white/10 bg-[#080615]/70 shadow-[0_18px_60px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          )}
        >
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <motion.img
              src="/favicon.svg"
              alt=""
              width={40}
              height={40}
              whileHover={{ rotate: -8, scale: 1.08 }}
              className="h-10 w-10 shrink-0 rounded-xl shadow-[0_0_24px_rgba(117,91,255,0.45)]"
            />
            <span className="min-w-0">
              <span className="block truncate text-base font-extrabold tracking-tight text-white">Ishit Atwal</span>
              <span className="hidden items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-green sm:flex">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-green" />
                </span>
                Cloud systems online
              </span>
            </span>
          </a>

          <div className="hidden lg:block">
            <MorphingDock active={active} placement="top" />
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-sm font-extrabold text-[#110956] transition-transform hover:-translate-y-0.5 sm:px-5"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </motion.header>

      {/* Mobile/tablet: the same dock floats at the bottom, within thumb reach. */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-[max(1rem,env(safe-area-inset-bottom))] lg:hidden"
      >
        <MorphingDock active={active} placement="bottom" />
      </motion.div>
    </>
  );
};
