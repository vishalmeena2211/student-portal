import React from 'react'

// Navbar component definition
export function Navbar() {
  return (
    <nav className="bg-[#6366F1] text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo and title section */}
        <div>
         <img src="/logo.png" alt="logo" />
        </div>
        
        {/* Centered title for larger screens */}
        <div className="hidden md:block text-center text-xl font-semibold">
          Student Portal
        </div>
        
        {/* User information section */}
        <div className="flex items-end flex-col">
          
          {/* Title for smaller screens */}
          <div className="md:hidden text-lg font-semibold">
            Student Portal
          </div>
          
          {/* User greeting and class information for larger screens */}
          <div className="hidden md:block text-right">
            <div className="font-semibold">Hello, Gabrisa!</div>
            <div className="text-sm">Class 7, Math + Science</div>
          </div>
        </div>
      </div>
    </nav>
  )
}