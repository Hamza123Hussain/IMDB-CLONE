'use client'
import Image from 'next/image'
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
    <>
      <div className="flex flex-col justify-center h-screen  items-center my-20 sm:mt-0">
        <div className="dark:bg-black dark:text-white relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
          <div className="w-full md:w-1/3 bg-white  grid place-items-center dark:bg-black dark:text-white">
            <Image
              src={`https://image.tmdb.org/t/p/original/${
                data.poster_path || data.backdrop_pathh
              }`}
              alt={data.homepage}
              className="rounded-xl"
              width={500}
              height={500}
            />
          </div>
          <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3 dark:bg-black dark:text-white">
            <div className="flex justify-between item-center">
              <p
                className={`text-black font-medium hidden md:block ${
                  data.status === 'Released' ? 'bg-green-500' : 'bg-red-500'
                } px-4 dark:text-white`}
                style={{ borderRadius: '50px ' }}
              >
                {data.status}
              </p>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="text-gray-600 font-bold text-sm ml-1">
                  {data.vote_average}
                  <span className="text-gray-500 font-normal">
                    ({data.vote_count})
                  </span>
                </p>
              </div>

              <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                Runtime: {data.runtime} mins
              </div>
            </div>
            <h3 className="font-black text-gray-800 md:text-3xl text-sm">
              {data.original_title}
            </h3>
            <p className="md:text-lg text-gray-500 text-base">
              {data.overview}
            </p>
            <p className="text-sm md:text-2xl font-black text-gray-800">
              Release Date : {data.release_date}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
