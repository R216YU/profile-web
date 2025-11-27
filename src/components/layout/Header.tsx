"use client";

import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { IoIosMenu } from "react-icons/io";
import { TbCertificate } from "react-icons/tb";
import { BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";
import { ModeToggle } from "@/components//theme/mode-toggle";
import LinkButton from "@/components/custom/LinkButton";
import LinkIcon from "@/components/custom/LinkIcon";
import Rara from "@/components//custom/Rara";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CONTENTS = [
  { name: "Profile", href: "/" },
  { name: "Skills", href: "/skills" },
  { name: "Works", href: "/works" },
] as const;

const LINKS = [
  {
    name: "Twitter(X)",
    href: "https://twitter.com/R216YU",
    icon: BsTwitterX,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/r216yu",
    icon: BsInstagram,
  },
  {
    name: "GitHub",
    href: "https://github.com/R216YU",
    icon: BsGithub,
  },
  {
    name: "Credly",
    href: "https://www.credly.com/users/r216yu",
    icon: TbCertificate,
  },
] as const;

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div className="flex justify-between items-center" id="header">
      {/* 左側 */}
      <div className="flex items-center">
        <LinkIcon href="/">
          <Rara size={24} />
        </LinkIcon>
        {!isMobile && (
          <>
            {CONTENTS.map((content) => (
              <LinkButton key={content.name} href={content.href}>
                {content.name}
              </LinkButton>
            ))}
          </>
        )}
      </div>

      {/* 右側 */}
      {isMobile ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <IoIosMenu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuLabel className="font-semibold">
              Contents
            </DropdownMenuLabel>
            <DropdownMenuGroup>
              {CONTENTS.map((content) => (
                <DropdownMenuItem key={content.name} className="pl-4">
                  <Link href={content.href} className="block w-full h-full">
                    {content.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="font-semibold">
              Links
            </DropdownMenuLabel>
            <DropdownMenuGroup>
              {LINKS.map((link) => (
                <DropdownMenuItem key={link.name} className="pl-4">
                  {<link.icon />}
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex items-center gap-2">
          {LINKS.map((link) => (
            <LinkIcon
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon />
            </LinkIcon>
          ))}
          <ModeToggle />
        </div>
      )}
    </div>
  );
};

export default Header;
