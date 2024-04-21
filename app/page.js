'use client'
import MovieCard from '@/components/MovieCard'
import Pageination from '@/components/Pageination'
import { Usepagecontext } from '@/libs/Context'
import { useState, useEffect } from 'react'

export default function Trending() {
  const [movieData, setMovieData] = useState([])
  const { page, setpage } = Usepagecontext()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=2422277ae0eeb10b737f5e464ad3e1c3&page=${page}`
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
  }, [page]) // Fetch data whenever page changes

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {movieData.map((movie) => (
          <MovieCard Movie={movie} key={movie.id} />
        ))}
      </div>
      <Pageination />
    </>
  )
}
