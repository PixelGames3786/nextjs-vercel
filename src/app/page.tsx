'use client'

import Image from "next/image";
import { useState, ChangeEvent, MouseEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import WorkDetailRogue from "@/components/workdetailRogue";
import WorkDetailParadise from "@/components/workdetailParadise";
import WorkDetailSatelite from "@/components/workdetailSatelite";
import WorkDetailLady from "@/components/workdetailLady";



import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home() {
  const [selectTag, setselectTag] = useState(0);
  const [selectWait, setSelectWait] = useState(false);

  const handleClick = (num: number) => {

    if (selectWait) return;

    setSelectWait(true);

    if (selectTag == num) {
      setselectTag(0);
    } else {
      setselectTag(num);

    }

    setTimeout(() => {
      setSelectWait(false);
    }, 550);
  };

  return (
    <div>
      <main className="flex min-h-screen flex-col bg-slate-200">
        <motion.header
          className="bg-slate-800 shadow w-full text-white"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <div className="flex mx-auto px-4 sm:px-6 lg:px-8">
            <span className="flex-grow text-center h-16 flex items-center justify-start">
              Kaiu Tomozawa's Portfolio
            </span>
            <span className="flex items-center justify-end ml-auto">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>うわああああ</NavigationMenuTrigger>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </span>
          </div>
        </motion.header>

        <div className="h-28 w-full">
        </div>

        <div className="w-full h-full pl-20 pb-10 items-start font-mono text-6xl">
          About
        </div>
        <div className="flex pb-20 items-center justify-center h-full">
          <div className="w-full max-w-5xl px-10">
            <div className="mb-10 ml-10 text-xl">
              Name
              <div className="ml-10 text-base">友澤 懐宇</div>
            </div>
            <div className="mb-10 ml-10 text-xl">
              Introduction
              <div className="ml-10 text-base">
                中学生の頃からプログラミングを学び始め、個人ゲーム開発者として活動中。
                主に使用するツールはUnity、Aseprite。近年はウェブ開発にも関心を抱いています。
              </div>
            </div>
            <div className="mb-10 ml-10 text-xl">
              Skill
              <div className="ml-10 text-base">
                C#,C++,Python(Django),JavaScript(Next.js)
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full pl-20 pb-10 items-start justify-between font-mono text-6xl">
          Works
        </div>

        <div className="pb-16">
          <div className="flex space-x-5 pb-5 items-center justify-center h-full ">
            <Card className="w-[40%] max-w-md">
              <CardHeader onClick={() => { handleClick(1) }}>
                <CardTitle>ログ・ログ・ローグ</CardTitle>
                <CardDescription>RPG</CardDescription>
              </CardHeader>
            </Card>
            <Card className="w-[40%] max-w-md">
              <CardHeader onClick={() => { handleClick(2) }}>
                <CardTitle>PARADISE LOST</CardTitle>
                <CardDescription>アクションRPG</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="flex space-x-5 pb-5 items-center justify-center h-full ">
            <Card className="w-[40%] max-w-md">
              <CardHeader onClick={() => { handleClick(3) }}>
                <CardTitle>サテライディフェンス</CardTitle>
                <CardDescription>タワーディフェンス</CardDescription>
              </CardHeader>
            </Card>
            <Card className="w-[40%] max-w-md">
              <CardHeader onClick={() => { handleClick(4) }}>
                <CardTitle>Lady's taste</CardTitle>
                <CardDescription>カードゲーム</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            クリックすると詳細が表示されます
          </div>

        </div>

        <AnimatePresence>
          {selectTag === 1 && <WorkDetailRogue key="workDetailRogue" />}
          {selectTag === 2 && <WorkDetailParadise key="workDetailParadise" />}
          {selectTag === 3 && <WorkDetailSatelite key="workDetailSatelite" />}
          {selectTag === 4 && <WorkDetailLady key="workDetailLady" />}
        </AnimatePresence>

        <div className="w-full h-full pl-20 py-20 items-start justify-between font-mono text-6xl">
          Contact
        </div>

        <div className="flex pb-20 items-center justify-center h-full">
          <div className="w-full max-w-5xl mb-10 text-xl text-center">
            kaiutomozawa@gmail.com
          </div>
        </div>

        <footer className="text-center">
          <p>&copy; 2024 Kaiu Tomozawa. All Rights Reserved</p>
        </footer>
      </main>
    </div>
  );
}
