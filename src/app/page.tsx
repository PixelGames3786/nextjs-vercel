'use client'

import Image from "next/image";
import { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import WorkSelectButton from "@/components/WorkDetail/workSelectButton";
import WorkDetailRogue from "@/components/WorkDetail/workdetailRogue";
import WorkDetailParadise from "@/components/WorkDetail/workdetailParadise";
import WorkDetailSatelite from "@/components/WorkDetail/workdetailSatelite";
import WorkDetailLady from "@/components/WorkDetail/workdetailLady";
import WorkDetailPitatto from "@/components/WorkDetail/workdetailPitatto";
import WorkDetailPortfolio from "@/components/WorkDetail/workdetailPortfolio";
import WorkDetailMetalFrontier from "@/components/WorkDetail/workdetailMetalFrontier";
import WorkDetailNagarator from "@/components/WorkDetail/workdetailNagarator";

import { Button } from "@/components/ui/button"
import BackToTopButton from "@/components/backToTopButton";
import HeaderButton from "@/components/headerButton";

import AnimatedSection from "@/components/scrollAnimation/animatedSection";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  const [selectTag, setselectTag] = useState(0);
  const [selectWait, setSelectWait] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);

  //作品ボタンが押された際に、詳細を表示する
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

  //ヘッダーのボタンを押すとその項目にスクロールする
  const scrollToSection = (tagId: string) => {
    const section = document.getElementById(tagId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  //五割以上スクロールしたらトップに戻るボタンを表示
  const handleScroll = () => {
    const viewportHeight = document.body.offsetHeight;
    const scrollPosition = window.scrollY;
    const threshold = viewportHeight * 0.5;

    setShowBackButton(scrollPosition > threshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期表示のため
  })

  return (
    <div>
      <Analytics />
      <main className="flex min-h-screen flex-col bg-slate-200">
        <motion.header
          className="bg-slate-800 shadow w-full text-white h-20 items-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}>
          <div className="flex mx-auto h-full px-3 md:px-8 text-base md:text-xl">
            <span className="flex-grow text-center flex items-center justify-start">
              Kaiu Tomozawa&rsquo;s Portfolio
            </span>
            <span className="flex items-center justify-end ml-auto space-x-1 md:space-x-5">
              <HeaderButton sectionId="AboutSection" buttonName="About" />
              <HeaderButton sectionId="WorksSection" buttonName="Works" />
              <HeaderButton sectionId="ContactSection" buttonName="Contact" />
            </span>
          </div>
        </motion.header>

        <div className="h-14 md:h-28 w-full">
        </div>


        <AnimatedSection>
          <div
            className="w-full h-full pl-10 md:pl-20 pb-8 md:pb-10 items-start font-mono text-4xl md:text-6xl"
            id="AboutSection">
            About
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex pb-10 md:pb-20 items-center justify-center h-full">
            <div className="w-full max-w-5xl px-5 md:px-10">
              <div className="mb-5 md:mb-10 ml-10 text-lg md:text-xl">
                Name
                <div className="ml-5 md:ml-10 text-sm md:text-base">友澤 懐宇</div>
              </div>
              <div className="mb-5 md:mb-10 ml-10 text-xl">
                Introduction
                <div className="ml-5 md:ml-10 text-sm md:text-base">
                  中学生の頃からプログラミングを学び始め、個人ゲーム開発者として活動中。
                  主に使用するツールはUnity、Aseprite。近年はウェブ開発にも関心を抱いています。
                </div>
              </div>
              <div className="mb-5 md:mb-10 ml-10 text-xl">
                Skill
                <div className="hidden ml-10 text-base md:block">
                  C#,C++,Python(Django),JavaScript(Next.js)
                </div>
                <div className="ml-5 text-sm md:hidden">
                  C#,C++,Python(Django),
                  JavaScript(Next.js)
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="w-full h-full pl-10 md:pl-20 pb-8 md:pb-10 items-start justify-between font-mono text-4xl md:text-6xl" id="WorksSection">
            Works
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="pb-16">
            <div className="flex space-x-2 md:space-x-5 pb-3 items-center justify-center h-full">
              <WorkSelectButton workName="ログ・ログ・ローグ" workGenre="RPG" clickNum={1} onClick={handleClick} />
              <WorkSelectButton workName="PARADISE LOST" workGenre="アクションRPG" clickNum={2} onClick={handleClick} />
            </div>

            <div className="flex space-x-2 md:space-x-5 pb-3 items-center justify-center h-full">
              <WorkSelectButton workName="サテライディフェンス" workGenre="タワーディフェンス" clickNum={3} onClick={handleClick} />
              <WorkSelectButton workName="Lady&rsquo;s taste" workGenre="カードゲーム" clickNum={4} onClick={handleClick} />
            </div>

            <div className="flex space-x-2 md:space-x-5 pb-3 items-center justify-center h-full">
              <WorkSelectButton workName="PITATTO はねカエル" workGenre="防衛アクション" clickNum={5} onClick={handleClick} />
              <WorkSelectButton workName="ポートフォリオ" workGenre="Webサイト" clickNum={6} onClick={handleClick} />
            </div>

            <div className="flex space-x-2 md:space-x-5 pb-3 items-center justify-center h-full">
              <WorkSelectButton workName="Metal Frontier" workGenre="3Dメカアクション" clickNum={7} onClick={handleClick} />
              <WorkSelectButton workName="Nagarator" workGenre="Web掲示板サービス" clickNum={8} onClick={handleClick} />
            </div>

            <div className="text-center text-slate-500 text-xs md:text-base">
              クリックすると詳細が表示されます
            </div>

          </div>
        </AnimatedSection>

        <AnimatePresence>
          {selectTag === 1 && <WorkDetailRogue key="workDetailRogue" />}
          {selectTag === 2 && <WorkDetailParadise key="workDetailParadise" />}
          {selectTag === 3 && <WorkDetailSatelite key="workDetailSatelite" />}
          {selectTag === 4 && <WorkDetailLady key="workDetailLady" />}
          {selectTag === 5 && <WorkDetailPitatto key="workDetailPitatto" />}
          {selectTag === 6 && <WorkDetailPortfolio key="workDetailPortfolio" />}
          {selectTag === 7 && <WorkDetailMetalFrontier key="workDetailMetalFrontier" />}
          {selectTag === 8 && <WorkDetailNagarator key="workDetailNagarator" />}
          {showBackButton && <BackToTopButton key="backToTopButton" />}
        </AnimatePresence>

        <AnimatedSection>
          <div className="w-full h-full pl-10 md:pl-20 py-8 md:py-20 items-start justify-between font-mono text-4xl md:text-6xl" id="ContactSection">
            Contact
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex pb-20 items-center justify-center h-full">
            <div className="w-full max-w-5xl mb-10 text-base md:text-xl text-center">
              kaiutomozawa@gmail.com
            </div>
          </div>
        </AnimatedSection>

        <footer className="text-center text-sm md:text-base">
          <p>&copy; 2024 Kaiu Tomozawa. All Rights Reserved</p>
        </footer>
      </main>
    </div>
  );
}
