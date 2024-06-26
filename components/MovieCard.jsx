import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MovieCard = ({ Movie }) => {
  console.log(Movie)
  return (
    <>
      <div className="flex items-center justify-center mt-10   ">
        <Link
          key={Movie.id}
          href={`/Movie/${Movie.id}`}
          style={{ borderBottom: '2px solid grey' }}
          className="group-hover:text-cyan-700 font-bold sm:text-2xl line-clamp-2 rounded-lg "
        >
          <div className="mx-auto  shadow-xl sm:w-96 ">
            <div className="grid rounded-3xl h-full flex-col ">
              <div className="sm:w-96 h-50 sm:h-80 flex justify-center mt-5  relative">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${
                    Movie.poster_path || Movie.backdrop_path
                  }`}
                  alt={Movie.id}
                  width={350}
                  height={100}
                  className=" rounded-xl hover:border-2 hover:border-sky-200 "
                />
              </div>

              <div className="group p-6 grid z-10">
                <h6 style={{ fontSize: '18px' }}>{Movie.original_title}</h6>

                <span className="text-slate-400 pt-2 font-semibold">
                  ({Movie.release_date})
                </span>

                <div className="grid-cols-2 flex group justify-between">
                  <div className="font-black flex flex-col">
                    <span className="text-yellow-500 text-xl">IMDB SCORE</span>
                    <span className="text-3xl flex gap-x-1 items-center group-hover:text-yellow-600">
                      {Math.round(Movie.vote_average).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default MovieCard
