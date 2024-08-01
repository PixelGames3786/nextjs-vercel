'use client'
import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect, useContext } from 'react';
import { Button } from "./ui/button";

const BackToTopButton = () => {

    //ページの一番上に戻す
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.div
            className='bg-slate-300 w-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}>

            <Button
                onClick={scrollToTop}
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '10px',
                    cursor: 'pointer',
                }}
                className="bg-slate-800 text-sm md:text-base h-[40px] md:h-[50px] w-[100px] md:w-[120px]"
            >
                Back to top
            </Button>

        </motion.div>
    )
}

export default BackToTopButton;
