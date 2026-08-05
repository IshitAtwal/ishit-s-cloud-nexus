export const Footer = () => (
  <footer className="border-t border-white/10 py-12 px-6 bg-gradient-to-t from-background via-background/50 to-transparent">
    <div className="mx-auto max-w-7xl">
      <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-white/10">
        <div>
          <div className="text-gradient text-sm font-bold mb-2">ISHIT ATWAL</div>
          <p className="text-sm text-muted-foreground">DevOps Engineer • Cloud Architect</p>
        </div>
        <div className="text-sm text-muted-foreground md:text-center">
          Built with React, Tailwind, Framer Motion, and a lot of <span className="text-transparent bg-gradient-cyan bg-clip-text">terraform apply</span>.
        </div>
        <div className="md:text-right">
          <div className="terminal-font text-xs text-muted-foreground">
            <span className="text-transparent bg-gradient-accent bg-clip-text">$</span> open_to_opportunities
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Ishit Atwal. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="mailto:ishitatwal20@gmail.com" className="hover:text-foreground transition-colors">Email</a>
        </div>
      </div>
    </div>
  </footer>
);
