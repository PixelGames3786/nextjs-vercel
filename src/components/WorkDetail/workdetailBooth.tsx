'use client'
import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect, useContext } from 'react';
import ImageWithSkeleton from "../ImageWithSkeleton";

const WorkDetailBooth= () => {

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
                    Booth
                </div>

                <ul className='justify-center pt-10 pb-10 text-sm md:text-base'>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>URL</p>
                        <p className='w-4/5 hover:text-blue-600 duration-150'>
                            <a href= "https://pixel-el.booth.pm/" target="_blank">https://pixel-el.booth.pm/</a>
                        </p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>ソースコード</p>
                        <p className='w-4/5'>
                            なし<br />
                        </p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>説明</p>
                        <p className='w-4/5'>
                            ゲーム制作の際に作成した3Dモデルなどを販売している<br />
                        </p>
                    </li>
                    <li className='flex justify-center py-[10px] border-b-2'>
                        <p className='w-1/5'>使用ツール</p>
                        <p className='w-4/5'>Blender、Booth</p>
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}

export default WorkDetailBooth;
