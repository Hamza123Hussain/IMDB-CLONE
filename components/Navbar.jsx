'use client'

import React, { useState } from 'react'
import DarkModeBtn from './DarkModeBtn'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleClick = () => {
    const searchRoute = router.pathname === '/Search/[id]' ? '/' : '/Search/'
    router.push(`${searchRoute}${search}`)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick()
    }
  }

  return (
    <nav className="py-4 px-8 bg-black">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-3">
        {/* IMDb Logo and Name */}
        <div className="flex items-center justify-between w-full md:w-auto gap-6">
          <a href="/" className="text-2xl font-bold flex items-center">
            <img
              src={'imdb_-_getty_-_h_-_2016.jpg'}
              alt="IMDb Logo"
              className="h-8 mr-2"
            />
          </a>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link
              href="/Trending"
              className="hover:text-gray-300 text-xs sm:text-lg"
            >
              Trending
            </Link>
            <Link
              href="/Toprated"
              className="hover:text-gray-300 text-xs sm:text-lg"
            >
              Top Rated
            </Link>
          </div>
          <DarkModeBtn />
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-auto mt-4 md:mt-0 flex justify-center items-center gap-7">
          <input
            onKeyUp={handleKeyPress}
            value={search}
            onChange={handleChange}
            type="text"
            placeholder="Search IMDb"
            className="bg-transparent border-2 border-black dark:border-white rounded-full px-4 py-2 outline-none focus:border-gray-300 w-full"
          />
          <button
            onClick={handleClick}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none "
          >
            <svg
              className="h-5 w-5 text-black dark:text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M20 20l-4-4m4 0l-4 4m0-16a8 8 0 110 16 8 8 0 010-16z"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
