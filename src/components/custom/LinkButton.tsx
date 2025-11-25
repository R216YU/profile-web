"use client";

import { Button } from "@/components/ui/button";

type LinkButtonProps = {
  children?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
};

const LinkButton = ({
  children,
  href,
  target,
  rel,
  disabled = false,
  variant = "ghost",
}: LinkButtonProps) => {
  if (disabled) {
    return (
      <Button variant={variant} disabled={disabled}>
        {children}
      </Button>
    );
  }

  return (
    <a href={href} target={target} rel={rel}>
      <Button
        variant={variant}
        className="hover:cursor-pointer"
        disabled={disabled}
      >
        {children}
      </Button>
    </a>
  );
};

export default LinkButton;
