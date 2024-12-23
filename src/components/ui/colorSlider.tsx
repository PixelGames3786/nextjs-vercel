"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

interface ColorSliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  trackStartColor?: string // トラックグラデーション始まりの色
  trackEndColor?: string // トラックグラデーション終わりの色
  thumbColor?:string //丸いやつの色
}

const ColorSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  ColorSliderProps
>(({ className, trackStartColor, trackEndColor,thumbColor, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track 
    className="relative h-2 w-full grow overflow-hidden rounded-full"
    style={{
      background: `linear-gradient(90deg, ${trackStartColor} 0%, ${trackEndColor} 100%)`,
    }}>
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb 
    className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" 
    style={{
      background: `${thumbColor}`,
    }}
    />
  </SliderPrimitive.Root>
))
ColorSlider.displayName = SliderPrimitive.Root.displayName

export { ColorSlider }
