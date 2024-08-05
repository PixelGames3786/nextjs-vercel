'use client'
import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect, useContext } from 'react';
import ImageWithSkeleton from "./ImageWithSkeleton";

const WorkDetailRogue= () => {

    return (
        <motion.div
            className='bg-slate-300 w-full'
            initial={{ scaleY: 0, opacity: 0,height:0}}
            animate={{ scaleY: 1, opacity: 1,height:'auto' }}
            transition={{ duration: 0.5 }}
            exit={{ scaleY: 0, opacity:0,height:0,transformOrigin: 'top left' }}
            style={{ transformOrigin: 'top left' }}>
            <div className='w-[90%] lg:w-[800px] mx-auto'>
                <div className="pt-10 pb-10 text-center justify-between font-mono font-semibold text-2xl md:text-3xl">
                    ログ・ログ・ローグ
                </div>

                <div className="flex w-full justify-center space-x-5 md:space-x-10">
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150">
                        <ImageWithSkeleton
                            src="/images/rogue/Rogue1.jpg"
                            alt="ログ・ログ・ローグ画像1"
                            width={144}
                            height={256}
                        />
                    </div>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150">
                        <ImageWithSkeleton
                            src="/images/rogue/Rogue2.jpg"
                            alt="ログ・ログ・ローグ画像2"
                            width={144}
                            height={256}
                        />
                    </div>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150">
                        <ImageWithSkeleton
                            src="/images/rogue/Rogue3.jpg"
                            alt="ログ・ログ・ローグ画像3"
                            width={144}
                            height={256}
                        />
                    </div>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150">
                        <ImageWithSkeleton
                            src="/images/rogue/Rogue4.jpg"
                            alt="ログ・ログ・ローグ画像4"
                            width={144}
                            height={256}
                        />
                    </div>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150">
                        <ImageWithSkeleton
                            src="/images/rogue/Rogue5.png"
                            alt="ログ・ログ・ローグ画像5"
                            width={144}
                            height={256}
                        />
                    </div>
                </div>



                <ul className='justify-center pt-10 pb-10 text-sm md:text-base'>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>URL</p>
                        <p className='w-4/5'>現在非公開</p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>ソースコード</p>
                        <p className='hidden w-4/5 md:block'>https://github.com/PixelGames3786/RoguRoguRogue</p>
                        <p className='w-4/5 md:hidden'>https://github.com/PixelGames3786/<br/>RoguRoguRogue</p>

                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>説明</p>
                        <p className='w-4/5'>
                            2020/4~2020/9にかけて制作しAndroid向けにリリースした。<br />
                            ８つの種族と９種の職業からキャラクターを作成し、生と死を繰り返して拠点を発展させていくRPG。<br />
                            UnityIAPとGoogleAdmobを用いてマネタイズを行った。
                        </p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>使用ツール</p>
                        <p className='w-4/5'>Unity</p>
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}

export default WorkDetailRogue;
