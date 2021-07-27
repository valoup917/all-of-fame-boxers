import React from 'react'
import Carditem from './Carditem'
import './Cards.css';
import ali from '../images/ali.jpeg';
import tyson from '../images/tyson.jpg';
import floyd from '../images/floyd.jpg';
import roy from '../images/roy.jpg';
import canelo from '../images/canelo.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1>The goats of the game</h1>
            <div className="cards__container">
                <div className="cardss__wrapper">
                    <ul className="cards__items">
                        <Carditem
                            src={ali}
                            text="Muhammad Ali The Greatest, world champion of WBA and WBC"
                            label="56-5-0"
                            path="/"
                        />
                        <Carditem
                            src={tyson}
                            text="Mike Tyson the Iron Mike or Kid Dynamite, youngest boxer to win a heavyweight title WBA, WBC, IBF"
                            label="50-6-2"
                            path="/"
                        />
                    </ul>
                    <ul className="cards__items">
                        <Carditem
                            src={floyd}
                            text="Floyd Mayweather jr, The Undefeated since 20 years of career and 50 fights"
                            label="50-0-0"
                            path="/"
                        />
                        <Carditem
                            src={roy}
                            text="Roy Jones Jr was world champion in 4 different weight classes, from middleweight to heavyweight"
                            label="66-9-0"
                            path="/"
                        />
                        <Carditem
                            src={canelo}
                            text="Saul Canelo Alvarez, world champion of WBC, WBA, WBO, IBF"
                            label="55-1-2"
                            path="/"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
