import React from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import LinkButton from "@/components/custom/LinkButton";
import Container from "@/components/layout/Container";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";

type Work = {
  title: string;
  description: string;
  link: string;
  github?: string;
  image: string;
};

const WORKS: Work[] = [
  {
    title: "my-web",
    description:
      "このWebサイトです。\nNext.jsとTailwindCSSを用いて作成しています。",
    link: "",
    github: "https://github.com/R216YU/profile-web",
    image: "/works/my-web.png",
  },
  {
    title: "image-compressor-app",
    description: "画像ファイルを圧縮するWebアプリです。現在作成中...",
    link: "",
    github: "",
    image: "",
  },
];

const WorksPage = () => {
  return (
    <Container title="Works">
      <div className="flex flex-col gap-8 mx-auto">
        {WORKS.map((work, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start ">
              <div className="w-[300px] shrink-0">
                <AspectRatio
                  ratio={16 / 9}
                  className="rounded-md overflow-hidden border"
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover text-center"
                  />
                </AspectRatio>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <h3 className="text-xl font-medium">{work.title}</h3>
                  <p className="text-sm whitespace-pre-wrap my-2">
                    {work.description}
                  </p>
                </div>
                <div className="flex flex-row gap-2">
                  <LinkButton
                    href={work.link}
                    disabled={!work.link}
                    variant="outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                    <BsArrowUpRight />
                  </LinkButton>
                  <LinkButton
                    href={work.github}
                    disabled={!work.github}
                    variant="outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                    <BsGithub />
                  </LinkButton>
                </div>
              </div>
            </div>
            {WORKS.length - 1 !== index && <Separator />}
          </React.Fragment>
        ))}
      </div>
    </Container>
  );
};

export default WorksPage;
