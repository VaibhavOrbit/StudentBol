"use client"
import { useState } from 'react'
import React from 'react'


export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false); 
  return (
    <div className="text-xl mt-3 text-black p-3">
      <div>
        <div className="flex justify-around items-center">
          {/* Logo */}
          <div>
            <span>StudentBol</span>
          </div>

          {/* Links */}
          <div className="space-x-10 cursor-pointer hidden md:flex">
            <span>Services</span>
            <span>Policy</span>
            <span>Help</span>
          </div>

          {/* Button */}
          <div>
            <div className="bg-black rounded-xl text-white px-4 py-2 flex items-center justify-center cursor-pointer hidden md:flex">
              <span>Get Started</span>
            </div>
          </div>


            <button
            className='md:hidden text-2xl focus:outline-none'
            onClick={()=>setIsOpen(!isOpen)}
            >
             ☰

            </button>

              {/* Mobile Menu */}
 

        </div>
      </div>
    </div>
  )
}
