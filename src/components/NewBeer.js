import React from 'react';
import Header from './MyHeader';
import { Button } from 'react-bootstrap';

function NewBeer(props) {
  const { btnSubmit } = props;

  return (
    <div>
      <Header />
      <form onSubmit={btnSubmit}>
        <label for="name">Name</label>
        <br />
        <input name="name" type="text" id="name" />
        <br />
        <label for="tagline">Tagline</label>
        <br />
        <input name="tagline" type="text" id="tagline" />
        <br />
        <label for="description">Description</label>
        <br />
        <input name="description" type="text" id="description" />
        <br />
        <label for="first_brewed">First Brewed</label>
        <br />
        <input name="first_brewed" type="text" id="first_brewed" />
        <br />
        <label for="brewers_tips">Brewers Tips</label>
        <br />
        <input name="brewers_tips" type="text" id="brewers_tips" />
        <br />
        <label for="attenuation_level">Attenuation Level</label>
        <br />
        <input name="attenuation_level" type="number" id="attenuation_level" />
        <br />
        <label for="contributed_by">Contributed By</label>
        <br />
        <input name="contributed_by" type="text" id="contributed_by" />
        <br />
        <br />
        <Button className='btn-warning' type="submit">Add Beer</Button>
      </form>
    </div>
  );
}

export default NewBeer;
