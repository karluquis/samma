'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Ribbon, Dog } from 'lucide-react';

export default function RibbonPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));

    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('play', () => setIsPlaying(true));
      audio.addEventListener('pause', () => setIsPlaying(false));
    }

    if (!isMobile && audio) {
      audio.play().catch(error => console.error("Audio playback failed:", error));
    }

    return () => {
      if (audio) {
        audio.removeEventListener('play', () => setIsPlaying(true));
        audio.removeEventListener('pause', () => setIsPlaying(false));
      }
    };
  }, [isMobile]);

  const playAudio = () => {
    if (audioRef.current && isMobile) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => console.error("Audio playback failed:", error));
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#8B4A3B] text-[#F5E6D3] p-4">
      <h1 className="text-3xl font-semibold mb-6 text-center flex items-center justify-center">
        <Ribbon className="w-8 h-8 mr-2" />
        <span className="mx-2">&</span>
        <Dog className="w-8 h-8 ml-2" />
      </h1>
      
      <blockquote className="text-xl italic mb-8 text-center max-w-md px-4 py-3 bg-[#F5E6D3]/10 rounded-lg">
        <p className="mb-2">"Dogs are not our whole life, but they make our lives whole."</p>
      </blockquote>
      
      <div className={`relative w-full max-w-md mb-8 ${isMobile ? 'cursor-pointer' : ''}`} onClick={playAudio}>
        <Image
          src="/dogs.png"
          alt="Ribbon and Oslo"
          width={350}
          height={350}
          layout="responsive"
          className="rounded-lg shadow-lg"
        />
        {isPlaying && isMobile && (
          <div className="absolute top-2 right-2 bg-[#F5E6D3]/80 text-[#8B4A3B] px-2 py-1 rounded-full text-sm">
            Playing...
          </div>
        )}
      </div>
      
      <audio ref={audioRef} src="/evergreen.mp3" className="hidden" />
    </div>
  );
}
