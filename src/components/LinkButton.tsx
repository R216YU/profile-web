"use client";

import React from "react";
import { Button } from "./ui/button";

type LinkButtonProps = {
  children?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
};

const LinkButton = ({ children, href, target, rel }: LinkButtonProps) => {
  return (
    <a href={href} target={target} rel={rel}>
      <Button variant="ghost" className="hover:cursor-pointer">
        {children}
      </Button>
    </a>
  );
};

export default LinkButton;
