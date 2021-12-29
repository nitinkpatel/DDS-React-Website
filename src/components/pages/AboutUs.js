import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CardItem from '../CardItem';

function AboutUs() {
    return (
        <>
         <p className='para'> We associate our work with the dual technical-cultural mission to improve the quality of life of prospective clients and future generations.</p>
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
               {/* <CardItem
              src='images/team2.jpg'
              text='Labour Contractors, Carpenters, Artist, Electrician, Painters'
              label='Our Team'
              path='/About-Us'
            /> */}
            </ul>
            </div>
        <Footer />
    </>
    )
}

export default AboutUs
