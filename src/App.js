import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Beers from './components/AllBeers';
import BeerDetail from './components/BeerDetail';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  const [beers, setBeers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      setBeers(response.data);
    };

    getData();
  }, []);

  useEffect(() => {
    navigate('/');
  }, [beers]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let newBeer = {
      name: event.target.name.value,
      tagline: event.target.tagline.value,
      description: event.target.description.value,
      first_brewed: event.target.first_brewed.value,
      brewers_tips: event.target.brewers_tips.value,
      attenuation_level: event.target.attenuation_level.value,
      contributed_by: event.target.contributed_by.value,
    };

    let response = await axios.post(
      'https://ih-beers-api2.herokuapp.com/beers/new',
      newBeer
    );
    setBeers([response.data, ...beers]);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:beerId" element={<BeerDetail />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer btnSubmit={handleSubmit}/>} />
      </Routes>
    </div>
  );
}

export default App;
