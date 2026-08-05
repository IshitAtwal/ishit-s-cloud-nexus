export const Footer = () => (
  <footer className="border-t border-white/10 bg-[#050817]/80 py-10 px-6 backdrop-blur-sm">
    <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 px-6 py-5 shadow-glass">
      <div>
        <div className="terminal-font text-xs text-muted-foreground">
          <span className="text-brand-green">$</span> echo "© {new Date().getFullYear()} Ishit Atwal"
        </div>
        <div className="mt-1 text-sm text-foreground/80">DevOps Engineer • Cloud • Linux • Automation</div>
      </div>
      <div className="text-xs text-muted-foreground md:text-right">
        Built with React, Tailwind, and a lot of <span className="text-brand-sky">terraform apply</span>.
      </div>
    </div>
  </footer>
);
