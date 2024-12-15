'use client'
import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect, useContext } from 'react';
import ImageWithSkeleton from "./ImageWithSkeleton";

const WorkDetailMetalFrontier= () => {

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
                    MetalFrontier
                </div>

                <div className="flex w-full h-full justify-center space-x-5 md:space-x-10 pb-5 md:pb-10">
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/images/metal/MetalFrontier01.jpg"
                            alt="MetalFrontier画像1"
                            width={256}
                            height={144}
                        />
                    </div>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/images/metal/MetalFrontier02.jpg"
                            alt="MetalFrontier画像2"
                            width={256}
                            height={144}
                        />
                    </div>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/images/metal/MetalFrontier03.jpg"
                            alt="MetalFrontier画像3"
                            width={256}
                            height={144}
                        />
                    </div>
                </div>

                <div className="flex p-x-17p md:p-0 w-full h-full items-center justify-center space-x-5 md:space-x-10">
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/images/metal/MetalFrontier04.jpg"
                            alt="MetalFrontier画像4"
                            width={256}
                            height={144}
                        />
                    </div>
                </div>

                <ul className='justify-center pt-10 pb-10 text-sm md:text-base'>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>プレイリンク</p>
                        <p className='hidden w-4/5 md:block hover:text-blue-600 duration-150'>
                            非公開
                        </p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>動画URL</p>
                        <p className='w-4/5 hover:text-blue-600 duration-150'>
                            <a href= "https://youtu.be/HyiLYHAMmqo" target="_blank">https://youtu.be/HyiLYHAMmqo</a>
                        </p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>ソースコード</p>
                        <p className='hidden w-4/5 md:block hover:text-blue-600 duration-150'>
                            <a href= "https://github.com/PixelGames3786/MetalFrontier" target="_blank">https://github.com/PixelGames3786/MetalFrontier</a>
                        </p>
                        <p className='w-4/5 md:hidden hover:text-blue-600 duration-150'>
                            <a href= "https://github.com/PixelGames3786/MetalFrontier" target="_blank">https://github.com/PixelGames3786/<br/>MetalFrontier</a>
                        </p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>説明</p>
                        <p className='w-4/5'>
                            2020/9月から制作中の3Dメカアクションゲーム<br />
                            工数削減のためボクセルモデルを使用している。<br />
                            現時点でボディパーツは20種以上、武器パーツは10種ほど実装済み。<br />
                            今後は、モジュールなどといったより拡張性を高める要素を実装する予定。
                        </p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>使用ツール</p>
                        <p className='w-4/5'>Unity、Blender、MOG3D</p>
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}

export default WorkDetailMetalFrontier;
