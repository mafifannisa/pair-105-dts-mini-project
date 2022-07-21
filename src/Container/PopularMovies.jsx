import React, { useEffect, useState } from 'react'
import { apiInstance } from '../Config/api'
import { Box, Typography } from '@mui/material'
import ScrollContainer from "react-indiana-drag-scroll"
const base_url = "https://image.tmdb.org/t/p/original/"

export const PopularMovies = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const movieList = async () => {
            try {
                const fetchTmdb = await apiInstance.get("/movie/popular")
                setMovies(fetchTmdb.data.results)
            } catch (err) {
                console.log(err);
            }
        }
        movieList()
    }, [])

    return (
        <>
            <Box className='container-bg' sx={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <Typography
                    sx={{
                        padding: "1em",
                        fontWeight: "bold",
                        color:"white",
                        textAlign: "Left"
                    }}
                >
                    Trending now 
                </Typography>
            </Box>
            <div className="rowX">
                <ScrollContainer className="row__posters">
                    {movies.map(item => {
                        return (
                            <img
                                key={item.id}
                                className="row__poster"
                                src={base_url+item.backdrop_path}
                                alt={item.name}
                            />
                        )
                    })}
                </ScrollContainer>
            </div>
                
        </>
    )
}
