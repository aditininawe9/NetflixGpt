import React from 'react'
import {IMG_CDN_URL} from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 px-2'>
      <img src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard
