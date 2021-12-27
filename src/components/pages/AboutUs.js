import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CardItem from '../CardItem';

function AboutUs() {
    return (
        <>
        <div className='cards__wrapper'>
                 <ul className='cards__items'>

       <CardItem
              src='images/team.jpg'
              text='Mr.Yogesh Tavethiya and Ms.Pooja Shihora'
              label='Founders & Principal Architects'
              path='/About-Us'
            />
             <CardItem
              src='images/team2.jpg'
              text='Project Designers, Architectural Interns, Interior Designers'
              label='Our Team'
              path='/About-Us'
            />
            </ul>
            </div>
        <Footer />
    </>
    )
}

export default AboutUs
