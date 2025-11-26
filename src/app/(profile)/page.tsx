"use client";

import Container from "@/components/layout/Container";
import { Table, TableCell, TableRow } from "@/components/ui/table";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Timeline, { TimelineEntry } from "@/components/custom/Timeline";

const PROFILE_DATA = [
  {
    label: "名前",
    value: "鈴木 龍",
  },
  {
    label: "生年月日",
    value: "2000/02/16",
  },
  {
    label: "職業",
    value: "エンジニア",
  },
  {
    label: "趣味",
    value: "音楽、アニメ、映画、ゲーム、ランニング",
  },
];

const TIMELINE_DATA: TimelineEntry[] = [
  {
    date: "2000",
    title: "誕生",
    content: "静岡県浜松市で誕生",
  },
  {
    date: "2005",
    title: "富山県に引っ越し",
    content: "家族で富山県にあるおばあちゃんの家に移住",
  },
  {
    date: "2006~2012",
    title: "小学時代",
    content: "サッカーに夢中",
  },
  {
    date: "2012~2015",
    title: "中学時代",
    content: "PCとゲームに出会い没頭",
  },
  {
    date: "2015~2019",
    title: "高校時代",
    content: "全日制→通信制高校、ゲーム・アルバイト中心の生活",
  },
  {
    date: "2019",
    title: "高卒認定合格",
    content: "友人の影響で資格取得を決意し合格",
  },
  {
    date: "2020",
    title: "日本大学入学",
    content: "経済学部に入学",
  },
  {
    date: "2020~2022",
    title: "プロゲーマー活動",
    content: "FPSを中心に大会参加・成績を収める",
  },
  {
    date: "2023",
    title: "プログラミング学習開始",
    content:
      "Python, JavaScript, TypeScriptなどの言語、フレームワークを独学で学ぶ",
  },
  {
    date: "2024~現在",
    title: "エンジニア就職",
    content: "IT企業にエンジニアとして入社",
  },
];

export default function Home() {
  return (
    <Container title="Ryu Suzuki's Profile">
      <div className="flex flex-row items-center justify-center gap-16">
        <div>
          <Tooltip>
            <TooltipTrigger>
              <img
                src="/profile/rara.jpg"
                alt="rara image"
                className="rounded-lg w-52"
              />
            </TooltipTrigger>
            <TooltipContent side="bottom">チワワのララ</TooltipContent>
          </Tooltip>
        </div>
        <div className="flex flex-col">
          <Table>
            {PROFILE_DATA.map((item) => (
              <TableRow key={item.label} className="border-none">
                <TableCell className="w-12">{item.label}</TableCell>
                <TableCell>{item.value}</TableCell>
              </TableRow>
            ))}
          </Table>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mx-auto">
        <Timeline data={TIMELINE_DATA} />
      </div>
    </Container>
  );
}
