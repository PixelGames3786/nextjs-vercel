'use client'
import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect, useContext } from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const WorkSelectButton = ({ workName, workGenre, clickNum, onClick }: { workName: string, workGenre: string, clickNum: number, onClick: (id: number) => void }) => {

    return (
        <Card className="flex w-[45%] md:w-[40%] h-[60px] md:h-[90px] max-w-md hover:border-slate-500 hover:shadow-glow-blue duration-150 justify-center items-center">
            <CardHeader onClick={() => { onClick(clickNum) }} className="place-items-center">
                <CardTitle className="text-xs md:text-2xl">{workName}</CardTitle>
                <CardDescription className="text-xs md:text-sm">{workGenre}</CardDescription>
            </CardHeader>
        </Card>
    )
}

export default WorkSelectButton;
