'use client'
import React, { Suspense, useEffect, useRef } from 'react'
import { App } from './App'
import Link from 'next/link';
import Music from './Music';



function Overlay() {

 
   
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
         
        <Link href="https://www.madhuriapoem.com/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        Home
        </Link>
      
      </div>
    )
  }

const ImageContainer = () => {
  const audioRef = useRef(null);
  useEffect(() => {
    const audio = audioRef.current;

    // Handle audio loading and playback
    audio.addEventListener('canplay', () => {
      audio.play();
    });

    // Handle errors
    audio.addEventListener('error', () => {
      console.error('Error loading audio');
    });

    // Cleanup on component unmount
    return () => {
      audio.pause();
      audio.removeEventListener('canplay', () => {
        audio.play();
      });
      audio.removeEventListener('error', () => {
        console.error('Error loading audio');
      });
    };
  }, []);
 
  return (
    <div className='w-full h-screen bg-black text-white'>
           
        <Suspense fallback={null}>
      <App />
    </Suspense>
    <Overlay />
    <audio ref={audioRef} autoPlay loop>
      <source src="/new_Lady.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    </div>
  )
}

export default ImageContainer