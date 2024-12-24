'use client'
import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect, useContext } from 'react';
import ImageWithSkeleton from "../ImageWithSkeleton";

const WorkDetailNagarator= () => {

    return (
        <motion.div
            className='bg-slate-300 w-full'
            initial={{ scaleY: 0, opacity: 0,height:0}}
            animate={{ scaleY: 1, opacity: 1,height:'auto' }}
            transition={{ duration: 0.5 }}
            exit={{ scaleY: 0, opacity:0,height:0,transformOrigin: 'top left' }}
            style={{ transformOrigin: 'top left' }}>
            
            <div className='w-[90%] lg:w-[800px] mx-auto'>
                <div className="pt-10 pb-10 text-center justify-between font-mono font-semibold text-3xl">
                    流板-Nagarator-
                </div>

                <ul className='justify-center pt-10 pb-10 text-sm md:text-base'>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>URL</p>
                        <p className='w-4/5 hover:text-blue-600 duration-150'>
                            <a href= "https://www.tomok13.com/nagarator" target="_blank">https://www.tomok13.com/nagarator</a>
                        </p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>ソースコード</p>
                        <p className='hidden w-4/5 md:block hover:text-blue-600 duration-150'>
                            <a href= "https://github.com/PixelGames3786/nextjs-vercel" target="_blank">https://github.com/PixelGames3786/nextjs-vercel</a>
                        </p>
                        <p className='w-4/5 md:hidden hover:text-blue-600 duration-150'>
                            <a href= "https://github.com/PixelGames3786/nextjs-vercel" target="_blank">https://github.com/PixelGames3786/<br/>nextjs-vercel</a>
                        </p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>説明</p>
                        <p className='w-4/5'>
                            2024/12制作。掲示板Webサービス。<br />
                            ニコニコの流れるコメントにインスパイアを受けて制作した。<br />
                            投稿するコメントの大きさ、色、太字などといった設定が可能。今後も機能は追加予定。<br />
                            データベースにはFirebaseを使用した。
                        </p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>使用ツール・サービス</p>
                        <p className='w-4/5'>Next.js、Vercel、Firebase</p>
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}

export default WorkDetailNagarator;
