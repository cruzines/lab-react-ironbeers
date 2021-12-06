import React from 'react';
import { useState, useEffect } from 'react';
import Header from './MyHeader';
import { useParams } from 'react-router-dom';
import { Spinner, Card } from 'react-bootstrap';
import axios from 'axios';

function RandomBeer() {
  const { beerId } = useParams();
  const [random, setRandom] = useState(null);

  useEffect(() => {
    async function getData() {
      let response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers/random'
      );
      const {
        image_url,
        name,
        tagline,
        first_brewed,
        attenuation_level,
        description,
        contributed_by,
      } = response.data;

      let beer = {
        image: image_url,
        name: name,
        tagline: tagline,
        first_brewed: first_brewed,
        attenuation_level: attenuation_level,
        description: description,
        contributed_by: contributed_by,
      };

      setRandom(beer);
    }
    getData();
  }, [beerId]);

  if (!random) {
    return <Spinner animation="border" variant="danger" />;
  }

  return (
    <div>
      <Header />
      <Card style={{ width: '50%' }}>
        <Card.Img variant="top" src={random.image} style={{ width: '50%' }} />
        <Card.Body>
          <Card.Title>
            {random.name} {random.attenuation_level}
          </Card.Title>
          <Card.Text>
            {' '}
            {random.tagline} {random.first_brewed}
            <br />
            {random.description}
            <br />
            Created by: {random.contributed_by}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RandomBeer;
