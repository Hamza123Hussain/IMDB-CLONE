'use client'
import MovieCard from '@/components/MovieCard'
import Pageination from '@/components/Pageination'
import { Usepagecontext } from '@/libs/Context'
import { useEffect, useState } from 'react'

export default function Toprated() {
  const [movieData, setMovieData] = useState([]) // Initialize with an empty array
  const { page } = Usepagecontext()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=2422277ae0eeb10b737f5e464ad3e1c3&language=en-US&page=${page}`
        )
        if (res.ok) {
          const data = await res.json()
          setMovieData(data.results)
        } else {
          throw new Error('Failed to fetch data')
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [page]) // Empty depend

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {movieData.map((ele) => {
          return <MovieCard Movie={ele} key={ele.id} />
        })}
      </div>
      <Pageination />
    </>
  )
}
