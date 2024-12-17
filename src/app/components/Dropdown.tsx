'use Client'
import React, { useState } from 'react'

const Dropdown = () => {
     const [isOpen, setIsOpen] = useState(false);
      const [selected, setSelected] = useState('Newest');
    
      const options = ['Newest', 'Oldest', 'Popular', 'Trending'];
    
      const handleSelect = (option : any) => {
        setSelected(option);
        setIsOpen(false);
      };
  return (
    <div>
        {/* Dropdown Component */}
        <div className="relative w-[236px] h-[46px]">
            {/* Dropdown Button */}
            <div
              className="flex items-center justify-between px-4 py-2 bg-white border rounded-md cursor-pointer shadow-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="text-gray-700">{selected}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
              <ul className="absolute left-0 w-full mt-1 bg-white border rounded-md shadow-lg z-10">
                {options.map((option, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
    </div>
  )
}

export default Dropdown