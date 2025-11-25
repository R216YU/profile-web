"use client";

import { BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";
import LinkButton from "@/components/custom/LinkButton";
import LinkIcon from "@/components/custom/LinkIcon";
import { ModeToggle } from "@/components//theme/mode-toggle";
import Rara from "@/components//custom/Rara";

const Header = () => {
  return (
    <div className="flex justify-between items-center" id="header">
      {/* 左側 */}
      <div className="flex items-center">
        <LinkIcon href="#header">
          <Rara size={24} />
        </LinkIcon>
        <LinkButton href="/">Profile</LinkButton>
        <LinkButton href="/skills">Skills</LinkButton>
        <LinkButton href="/works">Works</LinkButton>
      </div>
      {/* 右側 */}
      <div className="flex items-center gap-2">
        <LinkIcon
          href="https://twitter.com/R216YU"
          disabled
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitterX />
        </LinkIcon>
        <LinkIcon
          href="https://www.instagram.com/r216yu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </LinkIcon>
        <LinkIcon
          href="https://github.com/R216YU"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </LinkIcon>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
