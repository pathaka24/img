'use client'
import React, { Suspense, useEffect, useRef } from 'react'
import { App } from './App'
import Link from 'next/link';
 
import { PositionalAudio } from '@react-three/drei';



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
 
 
  return (
    <div className='w-full h-screen bg-black text-white'>
           
        <Suspense fallback={null}>
      <App />
      
    </Suspense>
    
    <Overlay />
     
    </div>
  )
}

export default ImageContainer