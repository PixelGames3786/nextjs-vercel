'use client'
import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect, useContext } from 'react';
import ImageWithSkeleton from "../ImageWithSkeleton";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export type WorkDetailProps = {
    closeVoid: () => void; // 関数型のプロパティ
};

const WorkDetailTest: React.FC<WorkDetailProps> = ({ closeVoid }) => {

    return (
        <div
            className='bg-slate-300 w-full h-full select-none'>
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
                        <p className='w-1/5'>プレイリンク</p>
                        <p className='w-4/5'>現在非公開</p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>動画リンク</p>
                        <p className='w-4/5 hover:text-blue-600 duration-150'>
                            <a href="https://youtu.be/e7MiWDE1FrY" target="_blank">https://youtu.be/e7MiWDE1FrY</a>
                        </p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>ソースコード</p>
                        <p className='hidden w-4/5 md:block hover:text-blue-600 duration-150'>
                            <a href="https://github.com/PixelGames3786/RoguRoguRogue" target="_blank">https://github.com/PixelGames3786/RoguRoguRogue</a>
                        </p>
                        <p className='w-4/5 md:hidden hover:text-blue-600 duration-150'>
                            <a href="https://github.com/PixelGames3786/RoguRoguRogue" target="_blank">https://github.com/PixelGames3786/<br />RoguRoguRogue</a>
                        </p>

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

                <div className="justify-center items-center flex">
                    <label
                        className="px-4 py-2 bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-600"
                        onClick={closeVoid}
                    >
                        閉じる
                    </label>
                </div>
            </div>
        </div>
    )
}

export default WorkDetailTest;
