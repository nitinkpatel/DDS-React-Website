import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CardItem from '../CardItem';

function AboutUs() {
    return (
        <>
         <ul className='cards__items'>
            <CardItem
                src='images/hiring.jpg'
                text='Drop your CV+Portfolio on delodesignarchitects.portfolio@gmail.com'
                label='Job Location : Surat'
                path='/Contact-Us'
            />
             <CardItem
                src='images/hiring.jpg'
                text='Drop your CV+Portfolio on delodesignstudio@gmail.com'
                label='Job Location : Surat'
                path='/Contact-Us'
            />
                <CardItem
                src='images/hiring.jpg'
                text='Drop your CV+Portfolio on delodesignstudio@gmail.com'
                label='Job Location : Surat'
                path='/Contact-Us'
            />
            </ul>

            <Footer />
        </>

    )
}

export default AboutUs
