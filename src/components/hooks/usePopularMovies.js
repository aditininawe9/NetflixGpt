import {url, options} from '../../utils/constant.js'
import { useDispatch, useSelector } from "react-redux";
import {addPopularMovies} from "../../utils/movieSlice.js"
import {useEffect} from 'react'

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', options);
    const json = await data.json();
    console.log('json', json);
    dispatch(addPopularMovies(json.results))
  }
  useEffect(() => {
    getPopularMovies();
  },[])
}

export default usePopularMovies
