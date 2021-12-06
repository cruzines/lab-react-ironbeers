import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    
    return (
        <div>
            <img src="/assets/beers.png" alt="beers"/>
            <br/>
            <Link to="/beers">All Beers</Link>
            <br/>
            <img src="/assets/random-beer.png" alt="randomBeer"/>
            <br/>
            <Link to="/random-beer">Random Beer</Link>
            <br/>
            <img src="/assets/new-beer.png" alt="newBeer"/>
            <br/>
            <Link to="/new-beer">New Beer</Link>
        </div>
    )
}

export default Home
