'use client'
import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect, useContext } from 'react';
import ImageWithSkeleton from "../ImageWithSkeleton";

const WorkDetailSatelite= () => {

    return (
        <motion.div
            className='bg-slate-300 w-full select-none'
            initial={{ scaleY: 0, opacity: 0,height:0}}
            animate={{ scaleY: 1, opacity: 1,height:'auto' }}
            transition={{ duration: 0.5 }}
            exit={{ scaleY: 0, opacity:0,height:0,transformOrigin: 'top left' }}
            style={{ transformOrigin: 'top left' }}>
            
            <div className='w-[90%] lg:w-[800px] mx-auto'>
                <div className="pt-10 pb-10 text-center justify-between font-mono font-semibold text-3xl">
                    サテライディフェンス
                </div>

                <div className="flex w-full h-full justify-center space-x-5 md:space-x-10 pb-5 md:pb-10">
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/images/satelite/Satelite1.jpg"
                            alt="サテライディフェンス画像1"
                            width={256}
                            height={144}
                        />
                    </div>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/images/satelite/Satelite2.jpg"
                            alt="サテライディフェンス画像2"
                            width={256}
                            height={144}
                        />
                    </div>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/images/satelite/Satelite3.jpg"
                            alt="サテライディフェンス画像3"
                            width={256}
                            height={144}
                        />
                    </div>
                </div>

                <div className="flex p-x-17p md:p-0 w-full h-full justify-center space-x-5 md:space-x-10">
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/images/satelite/Satelite4.jpg"
                            alt="サテライディフェンス画像4"
                            width={256}
                            height={144}
                        />
                    </div>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/images/satelite/Satelite5.jpg"
                            alt="サテライディフェンス画像5"
                            width={256}
                            height={144}
                        />
                    </div>
                </div>

                <ul className='justify-center pt-10 pb-10 text-sm md:text-base'>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>プレイリンク</p>
                        <p className='hidden w-4/5 md:block hover:text-blue-600 duration-150'>
                            <a href= "https://unityroom.com/games/sateli_difense" target="_blank">https://unityroom.com/games/sateli_difense(UnityRoom)</a>
                        </p>
                        <p className='w-4/5 md:hidden'>https://unityroom.com/games/<br/>sateli_difense(UnityRoom)</p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>動画リンク</p>
                        <p className='w-4/5 hover:text-blue-600 duration-150'>
                            <a href= "https://youtu.be/VLgTiDc5bkM" target="_blank">https://youtu.be/VLgTiDc5bkM</a>
                        </p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>ソースコード</p>
                        <p className='hidden w-4/5 md:block hover:text-blue-600 duration-150'>
                            <a href= "https://github.com/PixelGames3786/SateliDifense" target="_blank">https://github.com/PixelGames3786/SateliDifense</a>
                        </p>
                        <p className='w-4/5 md:hidden hover:text-blue-600 duration-150'>
                            <a href= "https://github.com/PixelGames3786/SateliDifense" target="_blank">https://github.com/PixelGames3786/<br/>SateliDifense</a>
                        </p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>説明</p>
                        <p className='w-4/5'>
                            2021/9に制作し、Unity1Week「ちゅう」に参加した。<br />
                            宇宙に着目し、人工衛星が惑星の周囲を旋回して防衛する円形タワーディフェンスゲーム。<br />
                            ポストエフェクトやDOTweenを使用することで、短期間で高品質に見えるゲームを制作することが出来た。
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

export default WorkDetailSatelite;
