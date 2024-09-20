'use client'
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
        });
        audio.removeEventListener('error', () => {
          console.error('Error loading audio');
        });
      };
    }, []);

  return (
    <div > 

        
     <audio ref={audioRef} autoPlay loop>
      <source src="/new_Lady.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    </div>
  )
}

export default Music