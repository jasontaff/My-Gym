import React from 'react'
import Button from './Button'
export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center">
        <div className="flex flex-col gap-4 max-w-[600px] w-full mx-auto p-4">

     
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl">Massive <span className="text-blue-400 font-medium">Gains</span></h1>
        </div>
        <p className="text-sm md:text-base font-light">By accessing this app, I acknowledge that I am stepping into a realm of <span  className="text-blue-400 font-medium">limitless</span> gains—physically, mentally, and beyond. 
            <br/>Proceed with <span  className="text-blue-400 font-medium">ambition</span>; greatness awaits.</p>
       
        <Button text ={"Accept & Begin"}></Button>
      
    </div>
  )
}
