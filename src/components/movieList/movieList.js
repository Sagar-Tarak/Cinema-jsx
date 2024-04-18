import React, { useEffect,useState } from 'react'
import "./movieList.css"
import Card from "../card/card"
import { useParams } from 'react-router-dom'

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        // eslint-disable-next-line
        getData()
    // eslint-disable-next-line 
    },[])

    useEffect(() => {
        getData()
    // eslint-disable-next-line 
    },[type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=ad800dce0b3fc18c6621ebd3a7c96ed0&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Card movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList