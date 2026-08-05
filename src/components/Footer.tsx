export const Footer = () => (
  <footer className="px-5 pb-6 pt-4 sm:px-8 lg:px-10">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-5 text-center sm:flex-row sm:text-left">
      <div>
        <p className="display-font text-sm font-semibold text-white">Ishit Atwal</p>
        <p className="mt-1 text-xs text-white/43">DevOps Engineer · Cloud Systems · Automation</p>
      </div>
      <p className="terminal-font text-[10px] uppercase tracking-[0.16em] text-white/37">© {new Date().getFullYear()} · built for reliable releases</p>
    </div>
  </footer>
);
