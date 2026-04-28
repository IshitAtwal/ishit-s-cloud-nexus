export const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-3">
      <div className="terminal-font text-xs text-muted-foreground">
        <span className="text-brand-green">$</span> echo "© {new Date().getFullYear()} Ishit Atwal — All rights reserved"
      </div>
      <div className="text-xs text-muted-foreground">
        Built with React, Tailwind, and a lot of <span className="text-brand-sky">terraform apply</span>.
      </div>
    </div>
  </footer>
);
