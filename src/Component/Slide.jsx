import React, { useEffect, useState } from 'react'
import { apiInstance } from '../Config/api'
import { Carousel } from 'react-bootstrap'
const base_url = "https://image.tmdb.org/t/p/original/";

export const Slide = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const movieList = async () => {
            try {
                const fetchTmdb = await apiInstance.get("/discover/movie")
                setMovies(fetchTmdb.data.results)
            } catch (err) {
                console.log(err);
            }
        }
        movieList()
    }, [])

    console.log(movies);
    return (
        <div>
            <Carousel> 
                {movies.map(item => {
                    return (
                        <Carousel.Item>
                            <img
                                style={{ objectFit: 'cover', maxHeight: '35rem', objectPosition: 'center' }}
                                className="d-block w-100"
                                src={base_url+item.backdrop_path}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 className='caption-carousel'>{item.title}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}
