"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function BreathingSection() {
  const [isInhaling, setIsInhaling] = useState(true)
  const [displayText, setDisplayText] = useState("Inhale")

  useEffect(() => {
    const interval = setInterval(() => {
      setIsInhaling(prev => !prev)
    }, 5000) // Switch every 5 seconds

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayText(isInhaling ? "Inhale" : "Exhale")
    }, 300) // Slight delay for text change

    return () => clearTimeout(timer)
  }, [isInhaling])

  const circleSize = 240
  const strokeWidth = 8
  const radius = (circleSize - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  const breathingCycle = {
    inhale: {
      strokeDashoffset: 0,
      stroke: "#F5E6D3",
      transition: {
        duration: 5,
        ease: "easeInOut"
      }
    },
    exhale: {
      strokeDashoffset: circumference,
      stroke: "#E6C8A3", // Lighter color for exhale
      transition: {
        duration: 5,
        ease: "easeInOut"
      }
    }
  }

  const textVariants = {
    enter: {
      opacity: 0,
      y: 20,
    },
    center: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  }

  return (
    <section className="w-full py-12 md:py-20 bg-[#8B4A3B] text-[#F5E6D3]">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-2xl md:text-3xl font-normal tracking-wide text-center mb-8 md:mb-12">Breathe with SAMMA</h2>
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          <div className="relative w-60 h-60 md:w-72 md:h-72 flex items-center justify-center">
            <svg
              width={circleSize}
              height={circleSize}
              viewBox={`0 0 ${circleSize} ${circleSize}`}
              className="transform -rotate-90"
            >
              <circle
                cx={circleSize / 2}
                cy={circleSize / 2}
                r={radius}
                fill="none"
                stroke="#F5E6D3"
                strokeWidth={strokeWidth}
                strokeOpacity="0.2"
              />
              <motion.circle
                cx={circleSize / 2}
                cy={circleSize / 2}
                r={radius}
                fill="none"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={0}
                strokeLinecap="round"
                animate={isInhaling ? "inhale" : "exhale"}
                variants={breathingCycle}
                initial={{ strokeDashoffset: circumference }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={displayText}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                  className="text-lg md:text-xl font-light"
                >
                  {displayText}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
          <p className="text-sm md:text-base text-center opacity-80 max-w-md">
            Watch as the circle completes during your inhale, then gently unwinds as you exhale.<br /><br />
            Let this soothing rhythm guide your breath, bringing you into a state of deep relaxation and presence.
          </p>
        </div>
      </div>
    </section>
  )
}