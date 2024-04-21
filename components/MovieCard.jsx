import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MovieCard = ({ Movie }) => {
  return (
    <div key={Movie.id} className="flex items-center justify-center mt-10">
      <div className="mx-auto rounded-3xl shadow-xl  sm:w-96">
        <div className="grid rounded-3xl  h-full  bg-slate-500 flex-col dark:bg-slate-900  ">
          <div className=" w-96 h-60 sm:h-80 relative">
            <Image
              src={`https://image.tmdb.org/t/p/original/${
                Movie.poster_path || Movie.backdrop_path
              }`}
              alt={Movie.id}
              className="rounded-t-3xl  object-fill"
              layout="fill"
            />
          </div>

          <div className="group p-6 grid z-10">
            <Link
              href={`/Movie/${Movie.id}`}
              className="group-hover:text-cyan-700 font-bold sm:text-2xl line-clamp-2"
              // onClick={handleMovieClick}
            >
              <h6 style={{ fontSize: '18px' }}>{Movie.original_title}</h6>
            </Link>
            <span className="text-slate-400 pt-2 font-semibold">
              ({Movie.release_date})
            </span>

            <div className="grid-cols-2 flex group justify-between">
              <div className="font-black flex flex-col">
                <span className="text-yellow-500 text-xl">IMDB SCORE</span>
                <span className="text-3xl flex gap-x-1 items-center group-hover:text-yellow-600">
                  {Movie.vote_average}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
