import React from "react";
import { Button } from "@/components/ui/button";

type LinkIconProps = {
  href?: string;
  children?: React.ReactNode;
  target?: string;
  rel?: string;
  disabled?: boolean;
};

const LinkIcon = ({ href, children, target, rel, disabled }: LinkIconProps) => {
  if (disabled) {
    return (
      <Button
        variant="ghost"
        size={"icon"}
        disabled
        className="hover:cursor-not-allowed"
      >
        {children}
      </Button>
    );
  }

  return (
    <a
      href={href}
      className="flex items-center gap-2"
      target={target}
      rel={rel}
    >
      <Button variant="ghost" size={"icon"} className="hover:cursor-pointer">
        {children}
      </Button>
    </a>
  );
};

export default LinkIcon;
