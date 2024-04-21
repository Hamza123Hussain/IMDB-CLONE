'use client'
import React, { useEffect } from 'react'

const error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error)
  }, [])

  return (
    <div className=" flex justify-center align-middle items-center flex-col">
      <h4>Something Went Wrong</h4>
      <button className="hover:text-amber-400" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  )
}

export default error
