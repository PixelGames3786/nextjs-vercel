'use client'
import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect, useContext } from 'react';
import ImageWithSkeleton from "./ImageWithSkeleton";

const WorkDetailPitatto= () => {

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
                    PITTATO はねカエル
                </div>

                <div className="flex w-full justify-center space-x-5 md:space-x-10">
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150">
                        <ImageWithSkeleton
                            src="/images/pitatto/pitatto1.jpg"
                            alt="PITATTO画像1"
                            width={144}
                            height={256}
                        />
                    </div>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150">
                        <ImageWithSkeleton
                            src="/images/pitatto/pitatto2.jpg"
                            alt="PITATTO画像2"
                            width={144}
                            height={256}
                        />
                    </div>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150">
                        <ImageWithSkeleton
                            src="/images/pitatto/pitatto3.jpg"
                            alt="PITATTO画像3"
                            width={144}
                            height={256}
                        />
                    </div>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150">
                        <ImageWithSkeleton
                            src="/images/pitatto/pitatto4.jpg"
                            alt="PITATTO画像4"
                            width={144}
                            height={256}
                        />
                    </div>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150">
                        <ImageWithSkeleton
                            src="/images/pitatto/pitatto5.jpg"
                            alt="PITATTO画像5"
                            width={144}
                            height={256}
                        />
                    </div>
                </div>



                <ul className='justify-center pt-10 pb-10 text-sm md:text-base'>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>プレイリンク</p>
                        <p className='w-4/5'>非公開</p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>動画リンク</p>
                        <p className='w-4/5 hover:text-blue-600 duration-150'>
                            <a href= "https://youtu.be/YWU-i0Jx_G4" target="_blank">https://youtu.be/YWU-i0Jx_G4</a>
                        </p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>ソースコード</p>
                        <p className='w-4/5'>非公開</p>

                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>説明</p>
                        <p className='w-4/5'>
                            2dayインターンにて、4人チームを組み作成した防衛ゲーム。（掲載許可済み）<br />
                            主にプレイヤーの移動や、傘を出し弾を跳ね返す処理を担当した。<br/>
                            &quot;ピッタリ跳ね返す爽快感&quot;というコンセプトを追求し、タイミングを合わせてピッタリ傘を差し雨粒を跳ね返すと、射線上にいる敵と雨粒が全て消滅する。
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

export default WorkDetailPitatto;
