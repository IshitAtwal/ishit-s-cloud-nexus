import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";

interface Step {
  prompt: string;
  output: string[];
}

const steps: Step[] = [
  {
    prompt: "docker run -d -p 80:80 nginx:alpine",
    output: ["Unable to find image 'nginx:alpine' locally", "Pulling from library/nginx", "Status: Downloaded newer image", "a7f3e9c2b1d8c4...  STARTED"],
  },
  {
    prompt: "kubectl apply -f deployment.yaml",
    output: ["deployment.apps/api-server created", "service/api-server created", "ingress.networking/api configured"],
  },
  {
    prompt: "aws deploy create-deployment --application-name web",
    output: ["{", "  \"deploymentId\": \"d-A1B2C3D4E\",", "  \"status\": \"InProgress\"", "}"],
  },
  {
    prompt: "terraform init && terraform apply -auto-approve",
    output: ["Initializing the backend...", "Terraform has been successfully initialized!", "Plan: 12 to add, 0 to change, 0 to destroy.", "Apply complete! Resources: 12 added."],
  },
];

export const TerminalSection = () => {
  const [stepIdx, setStepIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const [phase, setPhase] = useState<"typing" | "output" | "pause">("typing");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const step = steps[stepIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (typed.length < step.prompt.length) {
        timer = setTimeout(() => setTyped(step.prompt.slice(0, typed.length + 1)), 35);
      } else {
        timer = setTimeout(() => setPhase("output"), 400);
      }
    } else if (phase === "output") {
      if (outputLines.length < step.output.length) {
        timer = setTimeout(() => setOutputLines(step.output.slice(0, outputLines.length + 1)), 250);
      } else {
        timer = setTimeout(() => setPhase("pause"), 1400);
      }
    } else {
      timer = setTimeout(() => {
        setTyped("");
        setOutputLines([]);
        setStepIdx((i) => (i + 1) % steps.length);
        setPhase("typing");
      }, 600);
    }

    return () => clearTimeout(timer);
  }, [typed, phase, outputLines, stepIdx]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [outputLines, typed]);

  return (
    <section id="terminal" className="section-padding relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="05 — Terminal"
          title="Pipelines, in real time."
          subtitle="A live terminal-style panel to reinforce the DevOps theme without overwhelming the page."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden shadow-lg border border-white/15 bg-[#050817] backdrop-blur-lg hover:shadow-accent-glow transition-all"
        >
          {/* title bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-md" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e] shadow-md" />
              <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-md" />
            </div>
            <div className="terminal-font text-xs text-transparent bg-gradient-cyan bg-clip-text font-semibold">ishit@devops: ~/infra</div>
            <div className="w-12" />
          </div>

          <div
            ref={scrollRef}
            className="terminal-font text-sm p-6 md:p-8 h-96 overflow-y-auto leading-relaxed bg-gradient-to-b from-white/[0.02] to-transparent"
          >
            {/* history of completed steps */}
            {steps.slice(0, stepIdx).map((s, i) => (
              <div key={i} className="opacity-50 mb-4 pb-4 border-b border-white/5">
                <div className="mb-2">
                  <span className="text-transparent bg-gradient-cyan bg-clip-text">ishit@devops</span>
                  <span className="text-white/40">:</span>
                  <span className="text-primary">~/infra</span>
                  <span className="text-white/40">$ </span>
                  <span className="text-white/80">{s.prompt}</span>
                </div>
                {s.output.map((line, j) => (
                  <div key={j} className="text-secondary/90 text-opacity-70">{line}</div>
                ))}
              </div>
            ))}

            {/* current step */}
            <div>
              <div className="mb-2">
                <span className="text-transparent bg-gradient-cyan bg-clip-text font-semibold">ishit@devops</span>
                <span className="text-white/40">:</span>
                <span className="text-primary">~/infra</span>
                <span className="text-white/40">$ </span>
                <span className={`text-foreground font-semibold ${phase === "typing" ? "cursor-blink" : ""}`}>{typed}</span>
              </div>
              {outputLines.map((line, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-secondary/80"
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
