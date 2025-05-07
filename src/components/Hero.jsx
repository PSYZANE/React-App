import React from 'react'

const Hero = () => {
  return (
    <div className='h-lvh bg-blue-700 ml-auto relative'>
        <h1 className="absolute left-10/12 top-1/12  text-9xl font-bold [writing-mode:vertical-lr]">HERO</h1>
        <h1 className="absolute left-1/12 top-6/12 text-9xl font-bold [writing-mode:vertical-rl] rotate-180 text-red-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">HERO</h1>

        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-8/12 text-[20vw] font-bold">
          HERO
          <div className='relative'>
            <h1 className="absolute top-1/2 -translate-y-11/12 text-[20vw] font-bold opacity-95">HERO</h1>
            <h1 className="absolute top-1/2 -translate-y-10/12 text-[20vw] font-bold opacity-90">HERO</h1>
            <h1 className="absolute top-1/2 translate-y-11/12 text-[20vw] font-bold">HERO</h1>
            <h1 className="absolute top-1/2 translate-y-10/12 text-[20vw] font-bold">HERO</h1>
          </div>
        </h1>

        
    </div>
  )
}

export default Hero