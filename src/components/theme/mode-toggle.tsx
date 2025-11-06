"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { BsMoon, BsSun } from "react-icons/bs";

export function ModeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size={"icon"}
      onClick={handleToggle}
      suppressHydrationWarning
    >
      {resolvedTheme === "dark" ? <BsSun /> : <BsMoon />}
    </Button>
  );
}
