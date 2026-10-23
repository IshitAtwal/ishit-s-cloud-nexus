import { clsx, type ClassValue } from "clsx";

// Class names here never override each other, so plain clsx is enough (no tailwind-merge needed).
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
