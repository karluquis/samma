'use client'

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function RibbonPage() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.error("Audio playback failed:", error));
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#8B4A3B] text-[#F5E6D3] p-4">
      <h1 className="text-3xl font-semibold mb-6 text-center">For Ribbon and Oso</h1>
      
      <blockquote className="text-xl italic mb-8 text-center max-w-md px-4 py-3 bg-[#F5E6D3]/10 rounded-lg">
        <p className="mb-2">"Dogs are not our whole life, but they make our lives whole."</p>
      </blockquote>
      
      <div className="relative w-full max-w-md mb-8">
        <Image
          src="/dogs.png"
          alt="Ribbon and Oslo"
          width={350}
          height={350}
          layout="responsive"
          className="rounded-lg shadow-lg"
        />
      </div>
      
      <audio ref={audioRef} src="/evergreen.mp3" className="hidden" />
    </div>
  );
}
