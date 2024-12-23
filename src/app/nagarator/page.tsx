'use client'

import { useState, useEffect, ChangeEvent, MouseEvent, FormEvent } from 'react';
import { AnimatePresence, color, motion } from 'framer-motion';

import { Analytics } from "@vercel/analytics/react"
import { savePost } from "@/../firebase/save-posts"
import { fetchPosts, Post } from "@/../firebase/get-posts"

import Image from "next/image";

import CommentStream from "@/components/bulletin/CommentStream";

import { deleteOldPosts } from "@/../firebase/delete-old-posts"
import { deleteExcessPosts } from "@/../firebase/delete-excess-posts"
import { UserCookieRegister, UserCookieGetter } from "@/hooks/UserCookieController"

import { Slider } from "@/components/ui/slider"
import { ColorSlider } from "@/components/ui/colorSlider"

import PaletteIcon from "@/../public/paletteIcon.svg";
import LightModeIcon from "@/../public/lightModeIcon.svg"

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false); //投稿後一定時間投稿できないようにする
  const [isLightMode, setIsLightMode] = useState(false); //ライトモード デフォルトはダークモード
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [fontSize, setFontSize] = useState(10);
  const [isBold, setIsBold] = useState(false);
  const [isOutline, setIsOutline] = useState(false);
  const [outlineColor, setOutlineColor] = useState("#fff");
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  const [fontColorR, setFontColorR] = useState(255);
  const [fontColorG, setFontColorG] = useState(255);
  const [fontColorB, setFontColorB] = useState(255);

  //投稿を取得
  const getPosts = async () => {
    const data = await fetchPosts();
    setPosts(data);
  };

  const ChangeLightMode = () => {
    setIsLightMode(!isLightMode);

    if (isLightMode) {
      setOutlineColor("#fff");
    } else {
      setOutlineColor("#000");
    }
  }

  //最初にページが読まれた際の処理
  useEffect(() => {
    UserCookieRegister(); //UserIDのクッキーを登録
    getPosts(); //投稿を取得
    deleteExcessPosts(); //古い投稿を削除
  }, []);

  //投稿する
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!content.trim()) return;
    const newPost: Post | null = await savePost(UserCookieGetter(), content, fontColorR, fontColorG, fontColorB, fontSize, isBold, isOutline);

    if (newPost) {
      setPosts((prev) => ([...prev, newPost]));
    } else {
      alert("投稿に失敗しました");
    }

    setIsSubmitting(true);
    setContent("");
  };

  //投稿後一定時間後に投稿ボタンを再度有効化
  useEffect(() => {
    if (isSubmitting) {
      const timer = setTimeout(() => {
        setIsSubmitting(false);
      }, 5000); // 5秒間投稿不可

      return () => clearTimeout(timer);
    }
  }, [isSubmitting]);

  return (
    <div>
      <Analytics />
      <main className={`flex min-h-screen flex-col transition-all duration-100 ${isLightMode ? "bg-white" : "bg-black"}`}>
        <motion.header
          className="w-full text-white h-20 items-center z-10 pointer-events-none"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}>
          <div className="flex mx-auto h-full px-3 sm:px-8 text-base sm:text-xl">
            <span className="flex-grow text-center flex items-center justify-start">
              <div className={`hover:border pointer-events-auto rounded px-1 ${isLightMode ? "text-black border-black" : "text-white border-white"}`}>流板-Nagarator-</div>
            </span>
          </div>
        </motion.header>

        <CommentStream posts={posts} outlineColor={outlineColor}/>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] h-[84px] sm:h-24">
          <div
            className={`h-1/3 mb-1 flex w-full origin-left transition-all duration-100 ${isPaletteOpen ? 'scale-x-100' : 'scale-x-0'}`}
          >
            <div className={`w-1/3 rounded items-center justify-center flex px-[6px] opacity-80 ${isLightMode ? "bg-black" : "bg-white"}`}>
              <ColorSlider
                defaultValue={[255]} max={255} step={1}
                trackStartColor={`rgb(0 ${fontColorG} ${fontColorB})`}
                trackEndColor={`rgb(255 ${fontColorG} ${fontColorB})`}
                thumbColor={`rgb(255 0 0)`}
                onValueChange={(value) => setFontColorR(value[0])} />
            </div>
            <div className={`w-1/3 rounded items-center justify-center flex ml-1 px-[6px] opacity-80 ${isLightMode ? "bg-black" : "bg-white"}`}>
              <ColorSlider
                defaultValue={[255]} max={255} step={1}
                trackStartColor={`rgb(${fontColorR} 0 ${fontColorB})`}
                trackEndColor={`rgb(${fontColorR} 255 ${fontColorB})`}
                thumbColor={`rgb(0 255 0)`}
                onValueChange={(value) => setFontColorG(value[0])} />
            </div>
            <div className={`w-1/3 rounded items-center justify-center flex ml-1 px-[6px] opacity-80 ${isLightMode ? "bg-black" : "bg-white"}`}>
              <ColorSlider
                defaultValue={[255]} max={255} step={1}
                trackStartColor={`rgb(${fontColorR} ${fontColorG} 0)`}
                trackEndColor={`rgb(${fontColorR} ${fontColorG} 255)`}
                thumbColor={`rgb(0 0 255)`}
                onValueChange={(value) => setFontColorB(value[0])} />
            </div>
          </div>

          <div className='w-full h-1/3 rounded mb-1 flex'>
            <div
              className={`w-7 sm:w-8 border rounded text-center flex items-center justify-center ${isLightMode ? "border-black" : "border-white"}`}
              style={{
                color: `rgb(${fontColorR} ${fontColorG} ${fontColorB})`,
                fontSize: `${fontSize}px`,
                fontWeight: isBold ? "bold" : "normal",
                textShadow: isOutline ? `0.03em 0.03em 0 ${outlineColor},-0.03em 0.03em 0 ${outlineColor},0.03em -0.03em 0 ${outlineColor},-0.03em -0.03em 0 ${outlineColor}` : "none",
              }}>あ</div>
            <div className={`w-1/3 rounded items-center justify-center flex ml-1 px-[6px] opacity-80 ${isLightMode ? "bg-black" : "bg-white"}`}>
              <Slider
                defaultValue={[16]} max={25} step={1} min={8}
                onValueChange={(value) => setFontSize(value[0])} />
            </div>
            <button
              type="button"
              onClick={() => setIsBold(!isBold)}
              className={`w-7 sm:w-8 ml-1 rounded border-none cursor-pointer opacity-80 text-bold ${isLightMode ? "bg-black text-white" : "bg-white text-black"}`}
            >
              B
            </button>
            <button
              type="button"
              onClick={() => setIsOutline(!isOutline)}
              className={`w-7 sm:w-8 ml-1 rounded border cursor-pointer opacity-80 ${isLightMode ? "bg-white text-white border-black" : "bg-black text-black border-white"}`}
              style={{
                textShadow: `0.03em 0.03em 0 ${outlineColor},-0.03em 0.03em 0 ${outlineColor},0.03em -0.03em 0 ${outlineColor},-0.03em -0.03em 0 ${outlineColor}`
              }}
            >
              O
            </button>
            <button
              type="button"
              onClick={() => setIsPaletteOpen(!isPaletteOpen)}
              className={`w-8 rounded border-none cursor-pointer ml-1 opacity-80 flex items-center justify-center ${isLightMode ? "bg-black text-white" : "bg-white text-black"}`}
            >
              <PaletteIcon className="w-3/5 h-3/5" />
            </button>
            <button
              type="button"
              onClick={() => ChangeLightMode()}
              className={`w-8 rounded border-none cursor-pointer ml-1 opacity-80 flex items-center justify-center ${isLightMode ? "bg-black text-white" : "bg-white text-black"}`}
            >
              <LightModeIcon className="w-3/5 h-3/5" />

            </button>

          </div>

          <form onSubmit={handleSubmit} className="w-full h-1/3 flex">
            <textarea
              placeholder="内容を入力"
              value={content}
              onChange={(e) => {
                // 最大文字数を超えないようにする
                if (e.target.value.length <= 100) {
                  setContent(e.target.value);
                }
              }}
              onKeyDown={(e) => {
                // Enter キーのデフォルト動作を無効化 改行しないようにする
                if (e.key === "Enter") {
                  e.preventDefault();
                }
              }}
              className={`flex w-4/5 h-full mr-1 rounded border-none overflow-hidden whitespace-nowrap resize-none py-[4px] px-[10px] opacity-80 text-sm sm:text-base ${isLightMode ? "bg-black text-white" : "bg-white text-black"}`}
            ></textarea>

            <button
              type="submit"
              className="w-1/5 h-full bg-blue-500 text-white rounded border-none cursor-pointer ml-1 opacity-80 text-sm sm:text-base"
              disabled={isSubmitting} // 投稿中はボタンを無効化
            >
              {isSubmitting ? "流し待ち" : "流す"}
            </button>
          </form>
        </div>
        <footer className="fixed text-sm sm:text-base text-slate-500 z-10 bottom-0 w-full">
          <div className='flex text-center items-center justify-center'>
            <span className={`hover:border rounded px-1 ${isLightMode ? "border-black":"border-white"}`}>&copy; 2024 Kaiu Tomozawa. All Rights Reserved</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
