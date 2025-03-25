import {options} from "../../utils/constant"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import {addUpcomingMovies} from "../../utils/movieSlice.js"

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming", options)
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results))
    }

    useEffect(() => {
        getUpcomingMovies();
    },[]
    )
}

export default useUpcomingMovies;