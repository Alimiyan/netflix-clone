import React, {useEffect, useState} from 'react'
import './Banner.css'
import { API_Key, imageUrl } from '../../constants/constants'
import axios from '../../axios'

function Banner() {
  const [movie, setMovie] = useState('')
  const index = Math.floor(Math.random() * 21);
  useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_Key}&language=en-US`).then((response)=>{
        console.log(response.data.results[index])
        setMovie(response.data.results[index])
      }).catch(err=>{
        alert('Error occured')
      })
  }, [])
  return (
    <div style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.original_name || movie.original_title : ""}</h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner