import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Typography } from '@mui/material'

export const Footer = () => {
    return (
        <Navbar expand="lg" className='footer-bg bg-dark'>
            <Container className='justify-content-center'>
                <Typography variant='h5' sx={{ textAlign: 'center' }}>
                    Copyright Pair 105 MOCH AFIF SOLO @ 2022
                </Typography>
            </Container>
        </Navbar>
    )
}
