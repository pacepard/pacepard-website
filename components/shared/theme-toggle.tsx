"use client";

import { useEffect, useState } from "react"
import { Moon, Sun, Monitor } from "lucide-react" // Import Monitor for 'system' theme
import { useTheme } from "next-themes"

interface IToggle {
  className?: string
}

const ThemeToggle = ({ className }: IToggle) => {
  const [mounted, setMounted] = useState(false);
  // We need resolvedTheme to know what icon to show (light or dark)
  // We need theme to know what the current setting is (light, dark, or system)
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show nothing until mounted
  if (!mounted || !theme) {
    return null;
  }

  // --- Theme Cycling Logic ---
  let nextTheme: string;
  // let CurrentIcon;
 
  // //es-lint-unused-chars-ignore
  // // 1. Determine the icon based on the *resolved* theme
  // if (resolvedTheme === 'dark') {
  //   CurrentIcon = Moon; // It's currently dark, show Moon
  // } else if (resolvedTheme === 'light') {
  //   CurrentIcon = Sun; // It's currently light, show Sun
  // } else {
  //   CurrentIcon = Monitor; // Fallback for system theme or undefined state
  // }

  // 2. Determine the *next* theme to set (cycle between system, light, dark)
  switch (theme) {
    case 'light':
      nextTheme = 'dark';
      break;
    case 'dark':
      // The default behavior for many toggles is to go back to system after dark
      nextTheme = 'system'; 
      // OR, if you prefer only light/dark, change this line to: nextTheme = 'light';
      break;
    case 'system':
    default:
      nextTheme = 'light';
      break;
  }
  
  // Update the icon to show the *next* theme's icon for a clear visual prompt
  const IconToShow = (nextTheme === 'system' ? Monitor : (nextTheme === 'dark' ? Moon : Sun));
  const label = `Set theme to ${nextTheme}`;

  // --- Component Render ---
  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => setTheme(nextTheme)}
      className={`
        flex h-8 w-8 items-center justify-center rounded-full
        bg-muted text-muted-foreground shadow-sm transition-colors
        hover:bg-accent hover:text-accent-foreground
        ${className}
      `}
    >
      {/* You can choose to show the current theme icon, or the next theme icon. 
          Showing the next theme is generally better for a single toggle. */}
      <IconToShow className="h-4 w-4" />
    </button>
  );
}

export default ThemeToggle;