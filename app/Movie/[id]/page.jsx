'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Movie({ params }) {
  const [data, setData] = useState({})
  console.log(process.env.APikey)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { id } = params
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=2422277ae0eeb10b737f5e464ad3e1c3`
        )
        if (res.ok) {
          console.log('got data')
          const responseData = await res.json()
          setData(responseData)
        } else {
          throw new Error('Data not fetched')
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [params])

  return (
    <div className=" flex flex-col justify-center items-center p-5">
      {' '}
      <div className="sm:w-96 h-50 sm:h-80 flex justify-center mt-5 relative">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            data.poster_path || data.backdrop_path
          }`}
          alt={data.id}
          width={350}
          height={200}
          className="rounded-xl hover:border-2 hover:border-sky-200"
        />
      </div>
      <div className="flex items-center justify-center py-3 px-4 ">
        <div className="mx-auto shadow-xl sm:w-96">
          <div className="grid rounded-3xl h-full flex-col">
            <div className="group p-6 grid z-10">
              <h6 style={{ fontSize: '18px' }}>{data.original_title}</h6>
              <span className="text-slate-400 pt-2 font-semibold">
                Release Date : ({data.release_date})
              </span>
              <p className="md:text-lg text-gray-500 text-base">
                {data.overview}
              </p>{' '}
              <div className="bg-gray-200 px-3 py-1 my-5 rounded-full text-xs font-medium text-gray-800  md:block">
                Runtime: {data.runtime} mins
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="text-gray-600 font-bold text-lg ml-1">
                  {Math.round(data.vote_average).toFixed(1)}
                  <span className="text-gray-500 font-normal">
                    ({data.vote_count})
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
