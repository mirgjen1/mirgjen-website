"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="text-muted-foreground hover:text-foreground"
    >
      <Sun className="size-4 scale-100 rotate-0 dark:scale-0 dark:-rotate-90 transition-transform" />
      <Moon className="absolute size-4 scale-0 rotate-90 dark:scale-100 dark:rotate-0 transition-transform" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
