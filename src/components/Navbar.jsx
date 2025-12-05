import React from 'react';

export default function Navbar({ setPage, currentPage }) {
  const navItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div 
            className="text-2xl font-bold text-[#3d93c6] cursor-pointer"
            onClick={() => setPage('Home')}
          >
            Brand<span className="text-[#efae30]">UI</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setPage(item)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPage === item 
                    ? 'text-[#efae30]' 
                    : 'text-slate-300 hover:text-[#3d93c6]'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          {/* Mobile menu placeholder */}
          <div className="md:hidden text-slate-300">Menu</div>
        </div>
      </div>
    </nav>
  );
}
