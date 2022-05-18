import React,{useEffect} from 'react'
import MovieListing from '../Movielisting/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';
function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    // console.log(response);
  dispatch(fetchAsyncMovies())
  }, [dispatch])
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing/>
    </div>
  )
}

export default Home