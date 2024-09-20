'use client'
import ImageContainer from '@/components/ImageContainer';
import React, { useEffect, useRef } from 'react'

const Music = () => {

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
          console.log("play")
        });
        audio.removeEventListener('error', () => {
          console.error('Error loading audio');
        });
      };
    }, []);

  return (
    <div  className='h-screen w-full'> 
    <div>
    <ImageContainer />
    </div>
   
    
     
 <div>
 <Music />  
 </div>
        
    
    </div>
  )
}

export default Music