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
              text='Medieval Concept Flat. Mr.Khokhariya.'
              label='Surat'
              path='/projects'
            />
            <CardItem
              src='images/delo2.jpg'
              text='Art Nouveau Concept Bunglow.'
              label='Ankleshwar'
              path='/projects'
            />
            <CardItem
              src='images/delo15.jpg'
              text='Vatsalya International School. Ms.Deepali.'
              label='Surat'
              path='/projects'
            />
                 <CardItem
              src='images/delo6.jpg'
              text='Kanani Maternity Hospital.  
              Dr.Sharad Kanani.'
              label='Surat'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/delo9.jpg'
              text='Raghukul Infrastructure. Mr.Tank.'
              label='Surat'
              path='/projects'
            />
            <CardItem
              src='images/delo4.jpg'
              text='Brick Concept Farm House.'
              label='Vapi'
              path='/projects'
            />
            <CardItem
              src='images/delo11.jpg'
              text='Duplex Concept Bunglow.'
              label='Jaipur'
              path='/projects'
            />
                   <CardItem
              src='images/delo12.jpg'
              text='Modern Concept Penthouse.'
              label='Surat'
              path='/projects'
            />
                        <CardItem
              src='images/delo16.jpg'
              text='Gothic Concept Villa. Mr.Sanjaybhai.'
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