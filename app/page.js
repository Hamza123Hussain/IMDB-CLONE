'use client'
import MovieCard from '@/components/MovieCard'
import Pageination from '@/components/Pageination'
import { Usepagecontext } from '@/libs/Context'
import { useState, useEffect } from 'react'

export default function Trending() {
  const [movieData, setMovieData] = useState([])
  const { page, setpage } = Usepagecontext()
  const [loading, setloading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=2422277ae0eeb10b737f5e464ad3e1c3&page=${page}`
        )
        if (res.ok) {
          setloading(false)
          const data = await res.json()
          setMovieData(data.results)
        } else {
          throw new Error('Failed to fetch data')
        }
      } catch (error) {
        setloading(false)
        console.error(error)
      }
    }
    fetchData()
  }, [page]) // Fetch data whenever page changes

  if (loading) {
    return (
      <div className=" flex justify-center items-center gap-2 min-h-screen">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>{' '}
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>{' '}
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>{' '}
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
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
