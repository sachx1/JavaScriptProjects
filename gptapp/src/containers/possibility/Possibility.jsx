import React from 'react';
import possibilityImage from '../../assets/possibility.png'
import './possibility.css';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id="possibility">
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The Possibilities are Beyond your Imagination</h1>
        <p>Within the realms of technology lies a whole new world to explore. The Metaverse and Virtual Reality. Our AI can replicated human behaviour, and can simulate real life within a virtual environment.
          This is something that will take off in modern video games, as well as escapism from the trials and tribulations of life that we all face. 
        </p>
        <h4>Request for Early Access to get Started</h4>
      </div>
    </div>
  )
}

export default Possibility