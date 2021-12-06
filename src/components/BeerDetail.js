import React from 'react';
import { useState, useEffect } from 'react';
import Header from './MyHeader';
import { useParams } from 'react-router-dom';
import { Spinner, Card } from 'react-bootstrap';
import axios from 'axios';

function BeerDetail() {
  const { beerId } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    async function getData() {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
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

      setDetail(beer);
    }
    getData();
  }, [beerId]);

  if (!detail) {
    return <Spinner animation="border" variant="success" />;
  }

  return (
    <div>
      <Header />
      <Card style={{ width: '50%' }}>
        <Card.Img variant="top" src={detail.image} style={{ width: '50%' }} />
        <Card.Body>
          <Card.Title>
            {detail.name} {detail.attenuation_level}
          </Card.Title>
          <Card.Text>
            {' '}
            {detail.tagline} {detail.first_brewed}
            <br />
            {detail.description}
            <br />
            Created by: {detail.contributed_by}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BeerDetail;
