import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hoarding.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <p>ADVENTURE AWAITS</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
Call Us Now 
       </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
         <i class="fas fa-phone-volume"></i> 8980333334 
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
