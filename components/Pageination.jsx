'use client'
import { Usepagecontext } from '@/libs/Context'
import React from 'react'

const Pageination = () => {
  const { page, setpage } = Usepagecontext()

  const handlePrevPage = () => {
    if (page == 1) {
      setpage(1)
    } else {
      setpage(page - 1)
    }
  }

  const handleNextPage = () => {
    if (page == 20) {
      setpage(20)
    } else {
      setpage(page + 1)
    }
  }

  return (
    <div className="flex mx-auto justify-center items-center mt-7 mb-7">
      <button
        onClick={handlePrevPage}
        disabled={page === 1}
        className="bg-gray-700 text-white px-2 py-2 mr-2 rounded-md disabled:bg-gray-900 disabled:opacity-10 dark:bg-black dark:border-2 dark:border-white"
      >
        Previous
      </button>

      {Array(5)
        .fill()
        .map((_, index) => (
          <button
            key={index + 1}
            onClick={() => setpage(index + 1)}
            disabled={page == index + 1}
            className="bg-gray-700 text-white px-2 py-2 mr-2 rounded-md disabled:bg-gray-900 disabled:opacity-10 dark:bg-black dark:border-2 dark:border-white"
          >
            {index + 1}
          </button>
        ))}

      <button
        onClick={handleNextPage}
        disabled={page === 20}
        className="bg-gray-700 text-white px-2 py-2 mr-2 rounded-md disabled:bg-gray-900 disabled:opacity-10 dark:bg-black dark:border-2 dark:border-white"
      >
        Next
      </button>
    </div>
  )
}

export default Pageination
