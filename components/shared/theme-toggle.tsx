"use client";

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

interface IToggle {
  className?: string
}

const ThemeToggle = (data: IToggle) => {
const {className} = data
const [mounted, setMounted] = useState(false)
const { theme, setTheme } = useTheme()

  useEffect(() => {
   setMounted(true)
  }, [])

  if(!mounted) {
    return null
  }

  const options = [
    { value: "light", icon: <Sun className="h-4 w-4" />, label: "Light" },
    { value: "dark", icon: <Moon className="h-4 w-4" />, label: "Dark" },
  ] as const

  return (
    <fieldset className={`inline-flex h-8 items-center rounded-full border bg-muted p-1 shadow-sm ${className}`}>
      <legend className="sr-only">Select theme</legend>
      {options.map((opt) => (
        <label
          key={opt.value}
          className={`
            flex h-6 w-6 items-center justify-center rounded-full
            cursor-pointer transition-colors
            ${
              theme === opt.value
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }
          `}
        >
          <input
            type="radio"
            name="theme"
            value={opt.value}
            checked={theme === opt.value}
            onChange={() => setTheme(opt.value)}
            className="sr-only"
          />
          {opt.icon}
          <span className="sr-only">{opt.label}</span>
        </label>
      ))}
    </fieldset>
  )
}

export default ThemeToggle
