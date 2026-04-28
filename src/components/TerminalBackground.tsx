import { useEffect, useState } from "react";

const lines = [
  "$ kubectl get pods --all-namespaces",
  "NAME                READY   STATUS    RESTARTS",
  "api-server-7f8c9    1/1     Running   0",
  "$ docker ps -a",
  "CONTAINER ID   IMAGE              STATUS",
  "a7f3e9c2b1d8   nginx:alpine       Up 3 days",
  "$ terraform apply -auto-approve",
  "Plan: 12 to add, 0 to change, 0 to destroy.",
  "aws_instance.web: Creating...",
  "aws_s3_bucket.assets: Creation complete after 2s",
  "$ aws ec2 describe-instances --region us-east-1",
  "$ ansible-playbook -i hosts deploy.yml",
  "PLAY [Deploy application] ***************",
  "TASK [Gathering Facts] ******************",
  "ok: [web-01.prod]",
  "$ helm upgrade --install api ./charts/api",
  "Release \"api\" has been upgraded. Happy Helming!",
  "$ git push origin main",
  "$ jenkins build --job deploy-prod",
  "[INFO] Pipeline completed successfully",
];

interface Col { id: number; left: number; delay: number; speed: number; }

export const TerminalBackground = () => {
  const [cols, setCols] = useState<Col[]>([]);

  useEffect(() => {
    const c: Col[] = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      left: (i * 17 + Math.random() * 8) % 95,
      delay: -Math.random() * 30,
      speed: 35 + Math.random() * 25,
    }));
    setCols(c);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.07] dark:opacity-[0.13]">
      {cols.map((c) => (
        <div
          key={c.id}
          className="absolute top-0 terminal-font text-[11px] leading-relaxed text-brand-green whitespace-nowrap"
          style={{
            left: `${c.left}%`,
            animation: `scroll-up ${c.speed}s linear infinite`,
            animationDelay: `${c.delay}s`,
          }}
        >
          {[...lines, ...lines].map((line, i) => (
            <div key={i} className="py-0.5">{line}</div>
          ))}
        </div>
      ))}
    </div>
  );
};
