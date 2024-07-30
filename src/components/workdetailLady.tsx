'use client'
import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect, useContext } from 'react';
import ImageWithSkeleton from "./ImageWithSkeleton";

const WorkDetailLady= () => {

    return (
        <motion.div
            className='bg-slate-300 w-full'
            initial={{ scaleY: 0, opacity: 0,height:0}}
            animate={{ scaleY: 1, opacity: 1,height:'auto' }}
            transition={{ duration: 0.5 }}
            exit={{ scaleY: 0, opacity:0,height:0,transformOrigin: 'top left' }}
            style={{ transformOrigin: 'top left' }}>
            
            <div className='w-[800px] mx-auto'>
                <div className="pt-10 pb-10 text-center justify-between font-mono font-semibold text-3xl">
                    Lady's taste
                </div>

                <div className="flex w-full h-full justify-center space-x-10 pb-10">
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/worksimage/lady/Lady1.jpg"
                            alt="Image 1"
                            width={256}
                            height={144}
                        />
                    </div>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/worksimage/lady/Lady2.jpg"
                            alt="Image 2"
                            width={256}
                            height={144}
                        />
                    </div>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/worksimage/lady/Lady3.jpg"
                            alt="Image 3"
                            width={256}
                            height={144}
                        />
                    </div>
                </div>

                <div className="flex w-full h-full justify-center space-x-10">
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/worksimage/lady/Lady4.jpg"
                            alt="Image 4"
                            width={256}
                            height={144}
                        />
                    </div>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/worksimage/lady/Lady5.jpg"
                            alt="Image 5"
                            width={256}
                            height={144}
                        />
                    </div>
                </div>



                <ul className='justify-center pt-10 pb-10'>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>URL</p>
                        <p className='w-4/5'>https://drive.google.com/drive/folders/1Vgb2JJfpKdrRxmnoQAIkwNwgWYgozcIo?usp=drive_link(配布中)</p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>ソースコード</p>
                        <p className='w-4/5'>https://github.com/PixelGames3786/OjousamaCard</p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>説明</p>
                        <p className='w-4/5'>
                            大学サークルの企画で、2022/9~2022/11にかけてチーム開発を行った。<br />
                            お嬢様たちがそれぞれのカードデッキで勝負を行うユニークなコンセプトのカードゲーム。<br />
                            背景や、カード絵にはMidJourneyを使用。
                        </p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>使用ツール</p>
                        <p className='w-4/5'>Unity、Midjourney</p>
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}

export default WorkDetailLady;
