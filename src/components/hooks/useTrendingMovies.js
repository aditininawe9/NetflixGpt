import {options} from "../../utils/constant"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import {addTrendingMovies} from "../../utils/movieSlice.js"

const useTrendingMovies = () => {
    const dispatch = useDispatch();
    const getTrendingMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day', options)
        const json = await data.json();
        dispatch(addTrendingMovies(json.results))
    }
    useEffect(() => {
        getTrendingMovies()
    },[])
}

export default useTrendingMovies