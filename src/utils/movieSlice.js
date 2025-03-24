import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayinMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayinMovies = action.payload  
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        }
    }
})

export const {addNowPlayingMovies, addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer