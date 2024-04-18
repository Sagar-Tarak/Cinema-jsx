import React, { useEffect, useState } from 'react'
import Skeleton , { SkeletonTheme } from 'react-loading-skeleton'
import "./card.css"
import { Link } from 'react-router-dom'


const Card = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)


   useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        },)
   })

  return (
    <>
        {
            isLoading
            ?
            <div className='card' >
                <SkeletonTheme color="#202020"  highlightColor='#4444'>
                    <Skeleton height={300} duration={2}/>
                </SkeletonTheme>
            </div>
            :
            <Link to={`/movie/${movie.id}`} style={{textDecoration:"none",color:"white"}}>
                <div className='cards'>
                    <img className='card__img' alt='' src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`}/>
                    <div className='cards__overlay' >
                        <div className='card__title'>{movie?movie.original_title: ""}</div>
                        <div className='card__runtime'>
                            {movie?movie.release_date: ""}
                            <span className='card__rating'>{Math.floor(movie?movie.vote_average: "")}</span>
                            </div>
                            <div className='card__description'>{movie?movie.overview.slice(0,118)+"...": ""}</div>
                    </div>
                </div>
            </Link>
        }
    </>
  )
}

export default Card