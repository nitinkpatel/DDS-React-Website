import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our EPIC Portfolio!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/delo10.jpg'
              text='Flat'
              label='Surat'
              path='/projects'
            />
            <CardItem
              src='images/delo2.jpg'
              text='Bunglow'
              label='Ankleshwar'
              path='/projects'
            />
            <CardItem
              src='images/delo15.jpg'
              text='School'
              label='Surat'
              path='/projects'
            />
                 <CardItem
              src='images/delo6.jpg'
              text='Hospital'
              label='Surat'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/delo9.jpg'
              text='Office'
              label='Surat'
              path='/projects'
            />
            <CardItem
              src='images/delo4.jpg'
              text='Farm House'
              label='Vapi'
              path='/projects'
            />
            <CardItem
              src='images/delo11.jpg'
              text='Duplex'
              label='Jaipur'
              path='/projects'
            />
                   <CardItem
              src='images/delo12.jpg'
              text='Flat'
              label='Surat'
              path='/projects'
            />
                        <CardItem
              src='images/delo16.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Ahmedabad'
              path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;