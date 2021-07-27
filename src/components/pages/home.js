import React from 'react';
import '../../App.css'
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection'

function home () {
    return (
        <>
            <HeroSection/>
            <Cards/>
            <Footer/>
        </>
    )
}

export default home;