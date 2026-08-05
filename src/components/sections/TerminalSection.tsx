import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

interface Step {
  prompt: string;
  output: string[];
}

const steps: Step[] = [
  { prompt: "docker run -d -p 80:80 nginx:alpine", output: ["Unable to find image 'nginx:alpine' locally", "Pulling from library/nginx", "Status: Downloaded newer image", "a7f3e9c2b1d8c4... STARTED"] },
  { prompt: "kubectl apply -f deployment.yaml", output: ["deployment.apps/api-server created", "service/api-server created", "ingress.networking/api configured"] },
  { prompt: "aws deploy create-deployment --application-name web", output: ["{", '  "deploymentId": "d-A1B2C3D4E",', '  "status": "InProgress"', "}"] },
  { prompt: "terraform init && terraform apply -auto-approve", output: ["Initializing the backend...", "Terraform has been successfully initialized!", "Plan: 12 to add, 0 to change, 0 to destroy.", "Apply complete! Resources: 12 added."] },
];

export const TerminalSection = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const [phase, setPhase] = useState<"typing" | "output" | "pause">("typing");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const step = steps[stepIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      timer = typed.length < step.prompt.length
        ? setTimeout(() => setTyped(step.prompt.slice(0, typed.length + 1)), 28)
        : setTimeout(() => setPhase("output"), 400);
    } else if (phase === "output") {
      timer = outputLines.length < step.output.length
        ? setTimeout(() => setOutputLines(step.output.slice(0, outputLines.length + 1)), 220)
        : setTimeout(() => setPhase("pause"), 1450);
    } else {
      timer = setTimeout(() => {
        setTyped("");
        setOutputLines([]);
        setStepIndex((current) => (current + 1) % steps.length);
        setPhase("typing");
      }, 620);
    }

    return () => clearTimeout(timer);
  }, [typed, phase, outputLines, stepIndex]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [outputLines, typed]);

  return (
    <section id="terminal" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="05 · Live operations"
          title="A release pipeline should feel effortless."
          subtitle="A small live console that reflects the workflows behind the portfolio: provision, deploy, observe, repeat."
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="section-frame grid lg:grid-cols-[0.74fr_1.26fr]"
        >
          <div className="relative border-b border-white/10 bg-white/[0.025] p-7 sm:p-9 lg:border-b-0 lg:border-r">
            <p className="eyebrow">Pipeline status</p>
            <h3 className="display-font mt-6 text-3xl font-semibold leading-none tracking-[-0.06em] text-white">Deploy with confidence.</h3>
            <p className="mt-5 text-sm leading-7 text-white/56">Automation turns fragile release steps into a reliable engineering system.</p>
            <div className="mt-9 space-y-3">
              {[
                ["Provision", "Terraform applies the plan"],
                ["Package", "Builds ship as containers"],
                ["Release", "Services roll out cleanly"],
              ].map(([title, description], index) => (
                <div key={title} className="flex gap-3 rounded-xl border border-white/10 bg-black/15 p-3">
                  <span className="terminal-font grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-brand-sky/15 text-[10px] text-brand-sky-soft">0{index + 1}</span>
                  <div><p className="text-xs font-semibold text-white">{title}</p><p className="mt-0.5 text-[11px] text-white/45">{description}</p></div>
                </div>
              ))}
            </div>
            <div className="mt-9 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-green"><ShieldCheck className="h-4 w-4" /> Reliable by design</div>
          </div>

          <div className="relative min-w-0 bg-[#05030d] p-3 sm:p-5">
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.045] px-3 py-2.5">
              <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#ff6d78]" /><span className="h-2.5 w-2.5 rounded-full bg-[#e6bb5b]" /><span className="h-2.5 w-2.5 rounded-full bg-brand-green" /></div>
              <div className="terminal-font flex items-center gap-2 text-[10px] text-white/48"><Cpu className="h-3.5 w-3.5 text-brand-sky" /> ishit@cloud: ~/operations</div>
              <span className="w-10" />
            </div>
            <div ref={scrollRef} className="terminal-font mt-3 h-80 overflow-y-auto rounded-xl border border-white/10 bg-black/30 p-4 text-[11px] leading-6 sm:h-[25rem] sm:p-6 sm:text-xs">
              {steps.slice(0, stepIndex).map((step, index) => (
                <div key={`${step.prompt}-${index}`} className="mb-4 opacity-45">
                  <div><span className="text-terminal-prompt">ishit@cloud</span><span className="text-white/45">:</span><span className="text-brand-sky-soft">~/ops</span><span className="text-white/45">$ </span><span className="text-white/90">{step.prompt}</span></div>
                  {step.output.map((line) => <div key={line} className="text-terminal-fg/80">{line}</div>)}
                </div>
              ))}
              <div>
                <div><span className="text-terminal-prompt">ishit@cloud</span><span className="text-white/45">:</span><span className="text-brand-sky-soft">~/ops</span><span className="text-white/45">$ </span><span className={`text-white ${phase === "typing" ? "cursor-blink" : ""}`}>{typed}</span></div>
                {outputLines.map((line, index) => <motion.div key={`${line}-${index}`} initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }} className="text-terminal-fg">{line}</motion.div>)}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
