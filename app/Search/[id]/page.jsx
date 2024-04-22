'use client'
import MovieCard from '@/components/MovieCard'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { id } = params
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${id}&api_key=2422277ae0eeb10b737f5e464ad3e1c3`
        )
        if (res.ok) {
          console.log('got data')
          const responseData = await res.json()
          setData(responseData.results)
        } else {
          throw new Error('Data not fetched')
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [params])

  console.log(data)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 m-5">
      {data.map((Movie) => {
        return Movie.vote_average !== 0 && Movie.backdrop_path !== '' ? (
          <MovieCard Movie={Movie} />
        ) : (
          // <div
          //   key={Movie.id}
          //   className="flex items-center justify-center mt-10"
          // >
          //   <div className="mx-auto bg-white rounded-3xl shadow-xl">
          //     <div className="grid rounded-3xl max-w-[370px] shadow-sm bg-slate-500 flex-col dark:bg-slate-900  ">
          //       <Image
          //         src={`https://image.tmdb.org/t/p/original/${
          //           Movie.poster_path || Movie.backdrop_path
          //         }`}
          //         alt={Movie.id}
          //         className="rounded-xl"
          //         width={'400'}
          //         height={'400'}
          //       />

          //       <div className="group p-6 grid z-10">
          //         <Link
          //           href={`/Movie/${Movie.id}`}
          //           className="group-hover:text-cyan-700 font-bold sm:text-2xl line-clamp-2"
          //           // onClick={handleMovieClick}
          //         >
          //           {Movie.original_title}
          //         </Link>
          //         <span className="text-slate-400 pt-2 font-semibold">
          //           ({Movie.release_date})
          //         </span>

          //         <div className="grid-cols-2 flex group justify-between">
          //           <div className="font-black flex flex-col">
          //             <span className="text-yellow-500 text-xl">
          //               IMDB SCORE
          //             </span>
          //             <span className="text-3xl flex gap-x-1 items-center group-hover:text-yellow-600">
          //               {Movie.vote_average}
          //               <svg
          //                 width="24"
          //                 height="24"
          //                 viewBox="0 0 24 24"
          //                 fill="none"
          //                 xmlns="http://www.w3.org/2000/svg"
          //               >
          //                 {/* SVG content omitted for brevity */}
          //               </svg>
          //             </span>
          //           </div>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // </div>
          ''
        )
      })}
    </div>
  )
}

export default page
