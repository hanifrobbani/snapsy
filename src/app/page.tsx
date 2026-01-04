'use client'
import React, { useState, useRef, useEffect } from 'react';

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('BASE');
  const dropdownRef = useRef<HTMLDivElement | null>(null);;

  const options = ['BASE', 'ETH', 'HyperEVM'];

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-linear-to-b from-sky-100 to-white font-sans dark:bg-black">
      <div className="w-full max-w-2xl">
        <div className="text-center space-y-1">
          <h1 className="font-semibold text-4xl">Snapshot Multichain NFTs</h1>
          <p>support with 4+ chain & importing data into file</p>
        </div>
        <div className="mt-4 w-full space-y-4">
          <div className="flex items-center rounded-xl border border-gray-300 bg-white pl-3 h-12 shadow-sm">
            <div className="shrink-0 text-base text-gray-500 select-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </div>
            <input
              id="price"
              name="price"
              type="text"
              placeholder="Contract Address"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-none"
            />

            {/* Custom Dropdown */}
            <div ref={dropdownRef} className="relative flex items-center border-l border-gray-300">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 bg-transparent py-1.5 pl-3 pr-3 text-gray-700 text-sm font-medium cursor-pointer hover:text-gray-900 transition-colors focus:outline-none"
              >
                <span>{selected}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 9l6 6l6 -6" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50 transition-all duration-200 origin-top ${isOpen
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                }`}>
                {options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setSelected(option);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${selected === option
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button className="w-full bg-black rounded-md text-white font-semibold p-2 uppercase cursor-pointer hover:opacity-85">Capture Snaphot</button>
        </div>
      </div>
    </div>
  );
}
