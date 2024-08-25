'use client'
import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect, useContext } from 'react';
import ImageWithSkeleton from "./ImageWithSkeleton";

const WorkDetailParadise= () => {

    return (
        <motion.div
            className='bg-slate-300 w-full'
            initial={{ scaleY: 0, opacity: 0,height:0}}
            animate={{ scaleY: 1, opacity: 1,height:'auto' }}
            transition={{ duration: 0.5 }}
            exit={{ scaleY: 0, opacity:0,height:0,transformOrigin: 'top left' }}
            style={{ transformOrigin: 'top left' }}>
            
            <div className='w-[90%] lg:w-[800px] mx-auto'>
                <div className="pt-10 pb-10 text-center justify-between font-mono font-semibold text-4xl">
                    PARADISE LOST
                </div>

                <div className="flex w-full h-full justify-center space-x-5 md:space-x-10 pb-5 md:pb-10">
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/images/paradise/Paradise1.jpg"
                            alt="PARADISE LOST画像1"
                            width={256}
                            height={144}
                        />
                    </div>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/images/paradise/Paradise2.jpg"
                            alt="PARADISE LOST画像2"
                            width={256}
                            height={144}
                        />
                    </div>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/images/paradise/Paradise3.jpg"
                            alt="PARADISE LOST画像3"
                            width={256}
                            height={144}
                        />
                    </div>
                </div>

                <div className="flex p-x-17p md:p-0 w-full h-full items-center justify-center space-x-5 md:space-x-10">
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/images/paradise/Paradise4.jpg"
                            alt="PARADISE LOST画像4"
                            width={256}
                            height={144}
                        />
                    </div>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/images/paradise/Paradise5.jpg"
                            alt="PARADISE LOST画像5"
                            width={256}
                            height={144}
                        />
                    </div>
                </div>

                <ul className='justify-center pt-10 pb-10 text-sm md:text-base'>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>配布URL</p>
                        <p className='hidden w-4/5 md:block hover:text-blue-600 duration-150'>
                            <a href= "https://drive.google.com/drive/folders/1FnJqtOAmsDQoUB2g0B-k1BmcFUc9NBfz?usp=sharing" target="_blank">https://drive.google.com/drive/folders/1FnJqtOAmsDQoUB2g0B-k1BmcFUc9NBfz?usp=sharing(配布中)</a>
                        </p>
                        <p className='w-4/5 md:hidden hover:text-blue-600 duration-150'>
                            <a href= "https://drive.google.com/drive/folders/1FnJqtOAmsDQoUB2g0B-k1BmcFUc9NBfz?usp=sharing" target="_blank">https://drive.google.com/drive/folders/<br/>1FnJqtOAmsDQoUB2g0B-k1BmcFUc9NBfz?usp=sharing(配布中)</a>
                        </p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>動画URL</p>
                        <p className='w-4/5 hover:text-blue-600 duration-150'>
                            <a href= "https://youtu.be/ZciMoMvtATo" target="_blank">https://youtu.be/ZciMoMvtATo</a>
                        </p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>ソースコード</p>
                        <p className='hidden w-4/5 md:block hover:text-blue-600 duration-150'>
                            <a href= "https://github.com/PixelGames3786/PARADISE-LOST_URP" target="_blank">https://github.com/PixelGames3786/PARADISE-LOST_URP</a>
                        </p>
                        <p className='w-4/5 md:hidden hover:text-blue-600 duration-150'>
                            <a href= "https://github.com/PixelGames3786/PARADISE-LOST_URP" target="_blank">https://github.com/PixelGames3786/<br/>PARADISE-LOST_URP</a>
                        </p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>説明</p>
                        <p className='w-4/5'>
                            2020/9~2021/8にかけて制作し、Unityユースクリエイターカップに参加した。<br />
                            ICEYにインスパイアされた、2D横スクロールアクションゲーム。<br />
                            ポストエフェクトを用いてリッチな演出を実現している。Shaderの作成にはShaderGraphを用いた。
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

export default WorkDetailParadise;
