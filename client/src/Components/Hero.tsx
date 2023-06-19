import React from 'react';
import Container from './Container';
import hero from '../Assets/Hero-Image.jpg';
import Heading from './Heading';

const Hero = () => {
  return (
    <div 
      className='w-full h-[70vh] bg-cover bg-no-repeat hero'
      style={{ 
        backgroundImage: `url(${hero})`,
      }}
    >
      <Container>
        <div className='w-full flex flex-row'>
          <Heading
            title='T Shop'
            subtitle='Global reaspekt.'
            subtitletwo='Økologi og Bæredygtighed.'
            hero
          />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
