import React from 'react'
import { Book } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="bg-[#6366F1] text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Book className="h-6 w-6" />
          <span className="font-bold text-lg">ConnectEd</span>
        </div>
        <div className="hidden md:block text-center text-xl font-semibold">
          Student Portal
        </div>
        <div className="flex items-end flex-col">
          <div className="md:hidden text-lg font-semibold">
            Student Portal
          </div>
          <div className="hidden md:block text-right">
            <div className="font-semibold">Hello, Gabrisa!</div>
            <div className="text-sm">Class 7, Math + Science</div>
          </div>
        </div>
      </div>
    </nav>
  )
}