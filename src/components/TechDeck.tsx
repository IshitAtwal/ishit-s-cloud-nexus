import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion, type TargetAndTransition } from "framer-motion";
import { Activity, Cloud, Container, Layers3, Pause, Play, Ship, Workflow, type LucideIcon } from "lucide-react";

type Tech = { name: string; category: string; detail: string; icon: LucideIcon; from: string; to: string };

const techs: Tech[] = [
  { name: "AWS", category: "Cloud", detail: "EC2, S3, IAM, VPC and CloudWatch for production workloads.", icon: Cloud, from: "#ff9a3c", to: "#7a3b00" },
  { name: "Kubernetes", category: "Orchestration", detail: "Deployments, services and ingress that scale on demand.", icon: Ship, from: "#4f86ff", to: "#14307a" },
  { name: "Docker", category: "Containers", detail: "Reproducible images so every release ships the same way.", icon: Container, from: "#38b6ff", to: "#0b4a7a" },
  { name: "Terraform", category: "IaC", detail: "Versioned, reviewable infrastructure instead of console clicks.", icon: Layers3, from: "#9a6bff", to: "#3a1a7a" },
  { name: "Jenkins", category: "CI/CD", detail: "Pipelines that build, test and deploy on every push.", icon: Workflow, from: "#ff5a5f", to: "#6e1420" },
  { name: "Grafana", category: "Observability", detail: "Dashboards and alerts on Prometheus and CloudWatch metrics.", icon: Activity, from: "#ffb347", to: "#7a2e00" },
];

type Phase = "hidden" | "stack" | "fan" | "showcase" | "peel";

// Small, fixed jitter so the stacked pile looks hand-placed rather than perfectly aligned.
const pileRotation = [-7, 5, -3, 6, -5, 3];
const ease = [0.22, 1, 0.36, 1] as const;
const SHOWCASE_STEP = 900;

const useWidth = (ref: React.RefObject<HTMLElement>) => {
  const [width, setWidth] = useState(800);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
  return width;
};

export const TechDeck = () => {
  const ref = useRef<HTMLDivElement>(null);
  const width = useWidth(ref);
  const inView = useInView(ref, { margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [playing, setPlaying] = useState(!reduceMotion);
  // Reduced-motion visitors start paused on the readable row and can choose to play.
  const [phase, setPhase] = useState<Phase>(reduceMotion ? "showcase" : "hidden");
  const [active, setActive] = useState(0);

  const n = techs.length;
  const cardW = width < 520 ? Math.min(118, (width - 24) / 3.1) : 150;
  const cardH = cardW * 1.35;
  const gap = Math.max(8, Math.min(22, (width - n * cardW) / (n - 1)));
  // On narrow screens the full row cannot fit, so the showcase row glides to keep the active card centred.
  const step = cardW + gap;
  const rowFits = n * cardW + (n - 1) * gap <= width;

  // Phase timeline: hidden → stack → fan → showcase (one beat per card) → peel → repeat.
  useEffect(() => {
    if (!playing || !inView) return;
    const next = (): [() => void, number] => {
      switch (phase) {
        case "hidden": return [() => setPhase("stack"), 200];
        case "stack": return [() => setPhase("fan"), 1500];
        case "fan": return [() => { setActive(0); setPhase("showcase"); }, 1400];
        case "showcase":
          return active < n - 1
            ? [() => setActive((a) => a + 1), SHOWCASE_STEP]
            : [() => setPhase("peel"), SHOWCASE_STEP + 300];
        case "peel": return [() => setPhase("hidden"), 1300];
      }
    };
    const [run, delay] = next();
    const id = window.setTimeout(run, delay);
    return () => window.clearTimeout(id);
  }, [phase, active, playing, inView, n]);

  const target = (i: number): TargetAndTransition => {
    const centre = i - (n - 1) / 2;
    const rowOffset = rowFits ? 0 : -(active - (n - 1) / 2) * step;
    switch (phase) {
      case "hidden":
        return { x: 0, y: -80, rotate: pileRotation[i], scale: 0.9, opacity: 0, transition: { duration: 0 } };
      case "stack":
        return { x: centre * 4, y: -i * 3, rotate: pileRotation[i], scale: 1, opacity: 1, transition: { duration: 0.6, delay: i * 0.13, ease } };
      case "fan": {
        const angle = centre * 11;
        return { x: centre * cardW * 0.42, y: Math.abs(centre) ** 2 * 7, rotate: angle, scale: 1, opacity: 1, transition: { type: "spring" as const, stiffness: 140, damping: 16, delay: i * 0.04 } };
      }
      case "showcase": {
        const isActive = i === active;
        return {
          x: centre * step + rowOffset,
          y: isActive ? -16 : 0,
          rotate: 0,
          scale: isActive ? 1.08 : 0.96,
          opacity: isActive ? 1 : 0.5,
          transition: { type: "spring" as const, stiffness: 170, damping: 18, mass: 0.9 },
        };
      }
      case "peel":
        return { x: centre * step + rowOffset + 50, y: -110, rotate: 14, scale: 0.9, opacity: 0, transition: { duration: 0.55, delay: i * 0.08, ease: [0.55, 0, 0.75, 0.2] } };
    }
  };

  const current = techs[active];

  return (
    <div className="section-frame relative overflow-hidden px-4 pb-6 pt-10 sm:px-8">
      <div className="absolute inset-0 surface-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div ref={ref} className="relative mx-auto flex items-center justify-center" style={{ height: cardH + 70 }}>
        {techs.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={false}
            animate={target(i)}
            style={{ width: cardW, height: cardH, zIndex: phase === "showcase" && i === active ? 20 : i }}
            className="absolute"
          >
            <div
              className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-white/15 p-3 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.9)] sm:p-4"
              style={{ background: `linear-gradient(160deg, ${tech.from}, ${tech.to} 75%)` }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.35),transparent_40%)]" />
              <span className="terminal-font relative truncate text-[8px] uppercase tracking-[0.1em] text-white/80 sm:text-[10px] sm:tracking-[0.18em]">{tech.category}</span>
              <span className="relative mx-auto grid h-11 w-11 place-items-center rounded-2xl border border-white/25 bg-white/15 sm:h-14 sm:w-14">
                <tech.icon className="h-5 w-5 text-white sm:h-7 sm:w-7" />
              </span>
              <span className="display-font relative text-sm font-bold tracking-tight text-white sm:text-lg">{tech.name}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative mt-2 flex items-center justify-between gap-4">
        <div className="min-h-[3rem] min-w-0 flex-1">
          <AnimatePresence mode="wait">
            {phase === "showcase" ? (
              <motion.div
                key={current.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm font-semibold text-white">
                  {current.name} <span className="terminal-font ml-1 text-[10px] uppercase tracking-[0.16em] text-brand-green">{current.category}</span>
                </p>
                <p className="mt-1 text-xs text-white/55 sm:text-sm">{current.detail}</p>
              </motion.div>
            ) : (
              <motion.p
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="terminal-font pt-1 text-[11px] text-white/45"
              >
                $ deploying the stack…
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <button
          type="button"
          onClick={() => {
            // Pausing mid-transition would leave cards off-screen, so settle on the row first.
            if (playing && (phase === "hidden" || phase === "peel" || phase === "stack")) setPhase("showcase");
            setPlaying((p) => !p);
          }}
          aria-label={playing ? "Pause animation" : "Play animation"}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-colors hover:border-brand-sky/60 hover:bg-brand-sky/20"
        >
          {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
};
