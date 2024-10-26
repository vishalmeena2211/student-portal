import React from 'react';


export function Navbar() {
  return (
    <nav className="flex h-[98px] items-center justify-between px-[20px] text-white md:px-[50px] bg-[#6366F1]">
      <div>
        <img src='/logo.png' width={96.67} height={49.03} alt={"ConnectEd"} />
      </div>
      <h1 className="text-center text-xl font-bold leading-tight md:text-[32px]">
        Student Portal
      </h1>
      <div className="hidden md:block">
        <p className="text-right text-[23.333px] font-semibold">
          Hello, Gabrisa!
        </p>
        <p className="text-right text-xs leading-none">
          Class 7, Math + Science
        </p>
      </div>
    </nav>
  );
}