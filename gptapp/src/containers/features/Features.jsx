import React from 'react'
import './features.css'
import { Feature } from '../../components';

const featuresData = [
  {
    title:'Improving connections globally',
    text:'We are improving connections by integrating state of the art server technology with AMD Ryzen'
  },

  {
    title:'Becoming an industry standard',
    text:'Everyday our developers are striving to innovate on AI technologies'
  }, 

  {
    title:'Applying AI to everyday life', 
    text:'Our team is actively implementing our AI technology in everyday scenarios'
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'> The Future is Now and You Just Need To Realize It. Step into the Future Today & Make it Happen</h1>
        <p>Request Early Access To Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features