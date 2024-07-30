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
            
            <div className='w-[800px] mx-auto'>
                <div className="pt-10 pb-10 text-center justify-between font-mono font-semibold text-4xl">
                    PARADISE LOST
                </div>

                <div className="flex w-full h-full justify-center space-x-10 pb-10">
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/worksimage/paradise/Paradise1.jpg"
                            alt="Image 1"
                            width={256}
                            height={144}
                        />
                    </div>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/worksimage/paradise/Paradise2.jpg"
                            alt="Image 2"
                            width={256}
                            height={144}
                        />
                    </div>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/worksimage/paradise/Paradise3.jpg"
                            alt="Image 3"
                            width={256}
                            height={144}
                        />
                    </div>
                </div>

                <div className="flex w-full h-full justify-center space-x-10">
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/worksimage/paradise/Paradise4.jpg"
                            alt="Image 4"
                            width={256}
                            height={144}
                        />
                    </div>
                    <div className="transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-20">
                        <ImageWithSkeleton
                            src="/worksimage/paradise/Paradise5.jpg"
                            alt="Image 5"
                            width={256}
                            height={144}
                        />
                    </div>
                </div>



                <ul className='justify-center pt-10 pb-10'>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>URL</p>
                        <p className='w-4/5'>https://drive.google.com/drive/folders/1DPbWj_noDVPfs4xso2xdzpHhL-Db0Kyj?usp=drive_link(配布中)</p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>ソースコード</p>
                        <p className='w-4/5'>https://github.com/PixelGames3786/PARADISE-LOST_URP</p>
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
