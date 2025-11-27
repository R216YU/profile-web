import Link from "next/link";
import AppTextTooltip from "@/components/custom/AppTooltip";
import Container from "@/components/layout/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandPython,
  TbBrandTypescript,
} from "react-icons/tb";
import {
  SiAmazonapigateway,
  SiAmazonecs,
  SiAmazons3,
  SiAmazonsqs,
  SiAwslambda,
  SiBootstrap,
  SiChakraui,
  SiDjango,
  SiExpress,
  SiFastapi,
  SiFastify,
  SiFlask,
  SiHono,
  SiMantine,
  SiMui,
  SiNextdotjs,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRecoil,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiZod,
} from "react-icons/si";
import { LiaAws } from "react-icons/lia";

const page = () => {
  return (
    <Container title="Skills">
      <Accordion
        type="single"
        collapsible
        defaultValue="typescript/javascript"
        className="w-sm sm:w-md md:w-lg max-w-2xl mx-auto"
      >
        {/* TypeScript / JavaScript */}
        <AccordionItem value="typescript/javascript">
          <AccordionTrigger>
            <div className="flex flex-row items-center gap-2">
              <TbBrandTypescript className="h-6 w-6 text-blue-500" />
              <p>TypeScript / JavaScript</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              最も得意とする言語で、ReactやNext.jsを用いたフロントエンド開発経験があります。様々なライブラリを幅広く触っています。このサイトもshadcn/uiとTailwindcssを用いて作成しています。
              Express, Hono,
              Fastifyなどのバックエンドフレームワークの経験もあります。
            </p>
            <div className="flex flex-row flex-wrap gap-2">
              <AppTextTooltip text="React">
                <SiReact className="h-6 w-6 text-blue-400" />
              </AppTextTooltip>
              <AppTextTooltip text="Next.js">
                <SiNextdotjs className="h-6 w-6" />
              </AppTextTooltip>
              <AppTextTooltip text="Chakra UI">
                <SiChakraui className="h-6 w-6 text-teal-400" />
              </AppTextTooltip>
              <AppTextTooltip text="shadcn/ui">
                <SiShadcnui className="h-6 w-6 text-pink-400" />
              </AppTextTooltip>
              <AppTextTooltip text="MUI">
                <SiMui className="h-6 w-6 text-blue-700" />
              </AppTextTooltip>
              <AppTextTooltip text="Mantine">
                <SiMantine className="h-6 w-6 text-indigo-600" />
              </AppTextTooltip>
              <AppTextTooltip text="React Hook Form">
                <SiReacthookform className="h-6 w-6 text-green-600" />
              </AppTextTooltip>
              <AppTextTooltip text="Redux">
                <SiRedux className="h-6 w-6 text-purple-600" />
              </AppTextTooltip>
              <AppTextTooltip text="Recoil">
                <SiRecoil className="h-6 w-6 text-blue-600" />
              </AppTextTooltip>
              <AppTextTooltip text="React Router">
                <SiReactrouter className="h-6 w-6 text-red-600" />
              </AppTextTooltip>
              <AppTextTooltip text="TanStack Query">
                <SiReactquery className="h-6 w-6 text-teal-600" />
              </AppTextTooltip>
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <AppTextTooltip text="Express.js">
                <SiExpress className="h-6 w-6 text-gray-600" />
              </AppTextTooltip>
              <AppTextTooltip text="Hono">
                <SiHono className="h-6 w-6 text-purple-600" />
              </AppTextTooltip>
              <AppTextTooltip text="Fastify">
                <SiFastify className="h-6 w-6 text-yellow-500" />
              </AppTextTooltip>
              <AppTextTooltip text="Zod">
                <SiZod className="h-6 w-6 text-indigo-600" />
              </AppTextTooltip>
            </div>
          </AccordionContent>
        </AccordionItem>
        <Separator />

        {/* Python */}
        <AccordionItem value="python">
          <AccordionTrigger>
            <div className="flex flex-row items-center gap-2">
              <TbBrandPython className="h-6 w-6 text-gray-500" />
              <p>Python</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              私が最初に学習したプログラミング言語です。主にバックエンドフレームワークを使用したWebアプリケーション開発に利用しています。
            </p>
            <div className="flex flex-row flex-wrap gap-2">
              <AppTextTooltip text="Flask">
                <SiFlask className="h-6 w-6 text-sky-400" />
              </AppTextTooltip>
              <AppTextTooltip text="Django">
                <SiDjango className="h-6 w-6 text-green-600" />
              </AppTextTooltip>
              <AppTextTooltip text="FastAPI">
                <SiFastapi className="h-6 w-6 text-purple-600" />
              </AppTextTooltip>
            </div>
          </AccordionContent>
        </AccordionItem>
        <Separator />

        {/* HTML/CSS */}
        <AccordionItem value="html/css">
          <AccordionTrigger>
            <div className="flex flex-row items-center gap-2">
              <TbBrandHtml5 className="h-6 w-6 text-orange-500" />
              <TbBrandCss3 className="h-6 w-6 text-yellow-500" />
              <p>HTML / CSS</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              HTML,
              CSSを用いたフロントエンド開発が可能です。TailwindCSSやBootstrapなどのCSSフレームワークも利用経験があります。
            </p>
            <div className="flex flex-row flex-wrap gap-2">
              <AppTextTooltip text="Tailwind CSS">
                <SiTailwindcss className="h-6 w-6 text-sky-400" />
              </AppTextTooltip>
              <AppTextTooltip text="Bootstrap">
                <SiBootstrap className="h-6 w-6 text-purple-600" />
              </AppTextTooltip>
            </div>
          </AccordionContent>
        </AccordionItem>
        <Separator />

        {/* AWS */}
        <AccordionItem value="aws">
          <AccordionTrigger>
            <div className="flex flex-row items-center gap-4">
              <LiaAws className="h-6 w-6" />
              <p>AWS</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              AGW, Lambda, SQS, S3,
              DynamoDBなどのサーバーレスアーキテクチャでの開発経験があります。最近は資格取得のために学習中です。
              所持資格は
              <Link
                href="https://www.credly.com/users/r216yu"
                className="underline text-blue-500"
              >
                こちら
              </Link>
              をご覧ください。
            </p>
            <div className="flex flex-row flex-wrap gap-2">
              <AppTextTooltip text="API Gateway">
                <SiAmazonapigateway className="h-6 w-6 text-orange-500" />
              </AppTextTooltip>
              <AppTextTooltip text="Lambda">
                <SiAwslambda className="h-6 w-6 text-purple-600" />
              </AppTextTooltip>
              <AppTextTooltip text="SQS">
                <SiAmazonsqs className="h-6 w-6 text-blue-500" />
              </AppTextTooltip>
              <AppTextTooltip text="S3">
                <SiAmazons3 className="h-6 w-6 text-green-600" />
              </AppTextTooltip>
              <AppTextTooltip text="ECS">
                <SiAmazonecs className="h-6 w-6 text-orange-600" />
              </AppTextTooltip>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default page;
