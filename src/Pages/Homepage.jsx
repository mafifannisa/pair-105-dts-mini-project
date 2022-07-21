import React from 'react'
import { Footer } from '../Component/Footer'
import { Header } from '../Component/Header'
import { Slide } from '../Component/Slide'
import { PopularMovies } from '../Container/PopularMovies'

export const Homepage = () => {
    return (
        <>
            <Header />
            <div style={{ height: '100vh'}}>
                <Slide />
                <PopularMovies />
                <Footer />
            </div>
        </>
    )
}
