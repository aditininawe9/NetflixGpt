import {url, options} from '../../utils/constant.js'
import { useDispatch, useSelector } from "react-redux";
import {addNowPlayingMovies} from "../../utils/movieSlice.js"
import {useEffect} from 'react'

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const movie = useSelector((store) => store.movie);
  const getNowPlayingMovies = async() => {
    const data = await fetch(url, options);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results))
  }
  useEffect(() => {
    getNowPlayingMovies();
  },[])
}

export default useNowPlayingMovies
