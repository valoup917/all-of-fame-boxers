import React from 'react';
import { Button } from './Button.js';
import './HeroSection.css';
import '../App.css';
import video from '../videos/box.mp4';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src={video} autoPlay loop muted/>
            <h1>ALL OF FAME OF<br/>BOXERS</h1>
            <p>keep training, they have never gived up</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">GET STARTED</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">WATCH TRAILER <i className="far fa-play-circle"/> </Button>
            </div>
        </div>
    )
}

export default HeroSection;