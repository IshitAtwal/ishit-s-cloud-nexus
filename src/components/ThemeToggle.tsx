import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="rounded-full hover:bg-secondary/60"
    >
      {mounted && theme === "dark" ? (
        <Sun className="h-[1.15rem] w-[1.15rem] text-brand-sky" />
      ) : (
        <Moon className="h-[1.15rem] w-[1.15rem]" />
      )}
    </Button>
  );
};
