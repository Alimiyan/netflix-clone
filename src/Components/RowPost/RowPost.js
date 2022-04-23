import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_Key,imageUrl } from '../../constants/constants'

function RowPost() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(`discover/tv?api_key=${API_Key}&with_networks=213`).then((response)=>{
      console.log(response.data.results)
      setMovies(response.data.results)
    }).catch(err=>{
      alert('Error occured')
    })
  }, [])
  
  return (
    <div className='row'>
        <h2>Netflix Originals</h2>
        <div className="posters">
          {movies.map((obj)=>
            <img className='poster' src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )}

        </div>
    </div>
  )
}

export default RowPost