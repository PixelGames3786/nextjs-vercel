'use client'
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect, useContext } from 'react';
import { Button } from "./ui/button";

// Props の型定義
interface HeaderButtonProps {
    sectionId: string;
    buttonName: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ sectionId, buttonName }) => {

    const [isHovered, setIsHovered] = useState(false);

    // マウスが要素の上に乗ったときの処理
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    // マウスが要素から離れたときの処理
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    //ヘッダーのボタンを押すとその項目にスクロールする
    const scrollToSection = (tagId: string) => {
        const section = document.getElementById(tagId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }

        handleMouseEnter();

        setTimeout(() => {
            handleMouseLeave();
          }, 500);
    };

    return (
        <div>
            <div
                onClick={() => scrollToSection(sectionId)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="bg-slate-800 text-sm lg:text-xl md:text-base sm:text-base relative">
                {buttonName}


                <AnimatePresence>
                    {isHovered &&
                        <motion.div
                            className="bg-slate-100  h-0.5 absolute w-full"
                            animate={{ scaleX: 1 }}
                            initial={{ scaleX: 0 }}
                            transition={{ duration: 0.15 }}
                            exit={{ scaleX: 0, transformOrigin: 'top right' }}
                            style={{ transformOrigin: 'top left' }}
                        />}
                </AnimatePresence>
            </div>




        </div >
    )
}

export default HeaderButton;
