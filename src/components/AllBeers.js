import React from 'react';
import { useState, useEffect } from 'react';
import Header from './MyHeader';
import { Spinner, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Search from './Search';

//search not working yet 

function AllBeers() {

    const [beers, setBeers] = useState([]);

    useEffect(() => {
        async function getData() {
            let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
            setBeers(response.data);
        }

        getData();

    }, [])

    function handleSearch(event) {
        let searchedBeer = event.target.value
        let filteredBeers = beers.filter((beer) => {
            return beer.name.includes(searchedBeer)
        })
        setBeers(filteredBeers)
    }

    if(!beers.length) {
        return (
        <Spinner animation="border" variant="warning" />
        )
    }

    return (
        <div>
            <Header/>
            <Search btnSearch={handleSearch} />
            {beers.map((beer, i) => {
                return (
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={beer.image_url} style={{width:"50%"}}/>
                    <Card.Body>
                     <Card.Title><Link to={`/beers/${beer._id}`}> {beer.name} </Link></Card.Title>
                        <Card.Text>
                            {beer.tagline}
                            <br/>
                            Created by: {beer.contributed_by} 
                        </Card.Text>
                    </Card.Body>
                </Card>
                )
            })}
        </div>
    )
}

export default AllBeers
