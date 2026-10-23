import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion, type TargetAndTransition } from "framer-motion";
import { Check, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import awsLogo from "@/assets/tech/aws.svg";
import kubernetesLogo from "@/assets/tech/kubernetes.svg";
import dockerLogo from "@/assets/tech/docker.svg";
import terraformLogo from "@/assets/tech/terraform.svg";
import jenkinsLogo from "@/assets/tech/jenkins.svg";
import grafanaLogo from "@/assets/tech/grafana.svg";

type Tech = { name: string; category: string; detail: string; uses: string[]; logo: string; color: string };

// Logos: Devicon (MIT). Colours are each project's brand colour.
const techs: Tech[] = [
  { name: "AWS", category: "Cloud", detail: "Where my production workloads live.", uses: ["EC2, S3, IAM, VPC and CloudWatch", "Live EC2 deployments behind Nginx and PM2"], logo: awsLogo, color: "#ff9900" },
  { name: "Kubernetes", category: "Orchestration", detail: "Keeping containers healthy at any scale.", uses: ["Deployments, services and ingress", "Scaling and self-healing workloads"], logo: kubernetesLogo, color: "#326ce5" },
  { name: "Docker", category: "Containers", detail: "Same image from laptop to production.", uses: ["Containerised the Django Notes app", "Consistent builds across environments"], logo: dockerLogo, color: "#2496ed" },
  { name: "Terraform", category: "Infrastructure as Code", detail: "Infrastructure that is versioned and reviewed.", uses: ["Declarative cloud provisioning", "Repeatable environments, no console clicks"], logo: terraformLogo, color: "#844fba" },
  { name: "Jenkins", category: "CI/CD", detail: "Every push builds, tests and ships.", uses: ["Pipelines wired to Git and GitHub", "Automated build, test and deploy stages"], logo: jenkinsLogo, color: "#d33833" },
  { name: "Grafana", category: "Observability", detail: "Seeing problems before users do.", uses: ["Dashboards on Prometheus and CloudWatch", "Alerting and performance tracking"], logo: grafanaLogo, color: "#f46800" },
];

type Phase = "hidden" | "stack" | "fan" | "showcase" | "peel";

// The deck's choreography, named after the delivery stages it mimics.
const phaseSteps: { key: Phase; label: string }[] = [
  { key: "stack", label: "Provision" },
  { key: "fan", label: "Scale" },
  { key: "showcase", label: "Inspect" },
  { key: "peel", label: "Release" },
];

// Small, fixed jitter so the stacked pile looks hand-placed rather than perfectly aligned.
const pileRotation = [-7, 5, -3, 6, -5, 3];
const ease = [0.22, 1, 0.36, 1] as const;
const SHOWCASE_STEP = 1100;

const useWidth = (ref: React.RefObject<HTMLElement>) => {
  const [width, setWidth] = useState(700);
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
  const stageRef = useRef<HTMLDivElement>(null);
  const width = useWidth(stageRef);
  const inView = useInView(stageRef, { margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [playing, setPlaying] = useState(!reduceMotion);
  // Reduced-motion visitors start paused on the readable row and can choose to play.
  const [phase, setPhase] = useState<Phase>(reduceMotion ? "showcase" : "hidden");
  const [active, setActive] = useState(0);

  const n = techs.length;
  const cardW = width < 520 ? Math.min(118, (width - 24) / 3.1) : Math.min(150, (width - 5 * 14) / n);
  const cardH = cardW * 1.38;
  const gap = Math.max(8, Math.min(16, (width - n * cardW) / (n - 1)));
  const step = cardW + gap;
  // On narrow screens the full row cannot fit, so the row glides to keep the active card centred.
  const rowFits = n * cardW + (n - 1) * gap <= width;

  // Phase timeline: hidden → stack → fan → showcase (one beat per card) → peel → repeat.
  useEffect(() => {
    if (!playing || !inView) return;
    const next = (): [() => void, number] => {
      switch (phase) {
        case "hidden": return [() => { setActive(0); setPhase("stack"); }, 250];
        case "stack": return [() => setPhase("fan"), 1600];
        case "fan": return [() => setPhase("showcase"), 1500];
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

  const focusTech = (i: number) => {
    setActive(i);
    setPhase("showcase");
    setPlaying(false);
  };

  const togglePlay = () => {
    // Pausing mid-transition would leave cards off-screen, so settle on the row first.
    if (playing && phase !== "showcase" && phase !== "fan") setPhase("showcase");
    setPlaying((p) => !p);
  };

  const target = (i: number): TargetAndTransition => {
    const centre = i - (n - 1) / 2;
    const rowOffset = rowFits ? 0 : -(active - (n - 1) / 2) * step;
    switch (phase) {
      case "hidden":
        return { x: 0, y: -90, rotate: pileRotation[i], scale: 0.9, opacity: 0, transition: { duration: 0 } };
      case "stack":
        return { x: centre * 4, y: -i * 3, rotate: pileRotation[i], scale: 1, opacity: 1, transition: { duration: 0.6, delay: i * 0.14, ease } };
      case "fan":
        return { x: centre * cardW * 0.46, y: Math.abs(centre) ** 2 * 7, rotate: centre * 11, scale: 1, opacity: 1, transition: { type: "spring" as const, stiffness: 140, damping: 16, delay: i * 0.04 } };
      case "showcase": {
        const isActive = i === active;
        return {
          x: centre * step + rowOffset,
          y: isActive ? -18 : 0,
          rotate: 0,
          scale: isActive ? 1.1 : 0.94,
          opacity: isActive ? 1 : 0.45,
          transition: { type: "spring" as const, stiffness: 170, damping: 18, mass: 0.9 },
        };
      }
      case "peel":
        return { x: centre * step + rowOffset + 50, y: -120, rotate: 14, scale: 0.9, opacity: 0, transition: { duration: 0.55, delay: i * 0.08, ease: [0.55, 0, 0.75, 0.2] } };
    }
  };

  const current = techs[active];
  const phaseIndex = phaseSteps.findIndex((s) => s.key === phase);

  return (
    <div className="section-frame grid lg:grid-cols-[1.3fr_0.7fr]">
      {/* Stage */}
      <div className="relative overflow-hidden border-b border-white/10 px-4 pb-6 pt-6 sm:px-8 lg:border-b-0 lg:border-r">
        <div className="absolute inset-0 surface-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <motion.div
          aria-hidden="true"
          animate={{ backgroundColor: current.color }}
          transition={{ duration: 0.8 }}
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[90px]"
        />

        {/* Phase tracker */}
        <div className="relative flex flex-wrap items-center gap-1 sm:gap-1.5">
          {phaseSteps.map((s, i) => {
            const state = phase === "hidden" ? "pending" : i < phaseIndex ? "done" : i === phaseIndex ? "active" : "pending";
            return (
              <span
                key={s.key}
                className={cn(
                  "terminal-font flex items-center gap-1 rounded-full border px-2 py-1 text-[9px] uppercase tracking-[0.08em] transition-colors duration-300 sm:gap-1.5 sm:px-2.5 sm:text-[10px] sm:tracking-[0.14em]",
                  state === "active" && "border-brand-green/50 bg-brand-green/10 text-brand-green",
                  state === "done" && "border-white/10 text-white/60",
                  state === "pending" && "border-white/[0.06] text-white/30"
                )}
              >
                {state === "done" ? <Check className="h-3 w-3" /> : <span className={cn("h-1.5 w-1.5 rounded-full", state === "active" ? "animate-pulse bg-brand-green" : "bg-white/25")} />}
                {s.label}
              </span>
            );
          })}
        </div>

        <div ref={stageRef} className="relative mx-auto flex items-center justify-center" style={{ height: cardH + 110 }}>
          {/* floor shadow */}
          <div className="absolute bottom-6 left-1/2 h-8 w-2/3 -translate-x-1/2 rounded-[50%] bg-black/60 blur-xl" />

          {techs.map((tech, i) => {
            const isFocus = phase === "showcase" && i === active;
            return (
              <motion.button
                key={tech.name}
                type="button"
                onClick={() => focusTech(i)}
                aria-label={`Show ${tech.name}`}
                initial={false}
                animate={target(i)}
                whileHover={phase === "showcase" ? { y: isFocus ? -22 : -6 } : undefined}
                style={{ width: cardW, height: cardH, zIndex: isFocus ? 20 : i }}
                className="absolute rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-brand-sky"
              >
                <span
                  className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border p-3 text-left transition-shadow duration-500 sm:p-4"
                  style={{
                    background: `linear-gradient(160deg, ${tech.color}59 0%, #15122e 55%, #0b0920 100%)`,
                    borderColor: `${tech.color}66`,
                    boxShadow: isFocus ? `0 24px 60px -18px ${tech.color}, 0 0 0 1px ${tech.color}88` : "0 24px 50px -20px rgba(0,0,0,0.9)",
                  }}
                >
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(255,255,255,0.18),transparent_45%)]" />
                  <span className="terminal-font relative truncate text-[8px] uppercase tracking-[0.1em] text-white/70 sm:text-[9px] sm:tracking-[0.16em]">{tech.category}</span>
                  <span className="relative mx-auto grid aspect-square w-[58%] place-items-center rounded-2xl bg-white p-[14%] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">
                    <img src={tech.logo} alt="" className="h-full w-full object-contain" draggable={false} />
                  </span>
                  <span className="display-font relative text-sm font-bold tracking-tight text-white sm:text-base">{tech.name}</span>
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Detail panel */}
      <div className="relative flex flex-col justify-between gap-6 p-6 sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease }}
          >
            <div className="flex items-center gap-4">
              <span
                className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white p-3"
                style={{ boxShadow: `0 14px 40px -12px ${current.color}` }}
              >
                <img src={current.logo} alt={`${current.name} logo`} className="h-full w-full object-contain" />
              </span>
              <div>
                <p className="terminal-font text-[10px] uppercase tracking-[0.18em]" style={{ color: current.color }}>{current.category}</p>
                <h3 className="display-font mt-1 text-3xl font-semibold tracking-[-0.04em] text-white">{current.name}</h3>
              </div>
            </div>
            <p className="mt-5 text-base text-white/75">{current.detail}</p>
            <ul className="mt-4 space-y-2">
              {current.uses.map((use, i) => (
                <motion.li
                  key={use}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex gap-2.5 text-sm text-white/65"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-green/15"><Check className="h-3 w-3 text-brand-green" /></span>
                  {use}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        <div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Technologies">
              {techs.map((tech, i) => (
                <button
                  key={tech.name}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={tech.name}
                  onClick={() => focusTech(i)}
                  className={cn(
                    "grid h-9 w-9 place-items-center rounded-xl border p-1.5 transition-all duration-300",
                    i === active ? "scale-110 border-white bg-white shadow-[0_6px_20px_-6px_rgba(255,255,255,0.5)]" : "border-white/20 bg-white/90 opacity-45 grayscale hover:opacity-100 hover:grayscale-0"
                  )}
                >
                  <img src={tech.logo} alt="" className="h-full w-full object-contain" />
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={togglePlay}
              aria-label={playing ? "Pause animation" : "Play animation"}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-colors hover:border-brand-sky/60 hover:bg-brand-sky/20"
            >
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
          </div>
          <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full"
              animate={{ width: `${((active + 1) / n) * 100}%`, backgroundColor: current.color }}
              transition={{ duration: 0.5, ease }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
