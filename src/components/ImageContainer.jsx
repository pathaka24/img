'use client'
import React, { Suspense } from 'react'
import { App } from './App'



function Overlay() {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
        <a href="madhuriapoem.com" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
          Home
          <br />
         
        </a>
        
      </div>
    )
  }

const ImageContainer = () => {
  return (
    <div className='w-full h-screen bg-black text-white'>I
        <Suspense fallback={null}>
      <App />
    </Suspense>
    <Overlay />
    </div>
  )
}

export default ImageContainer