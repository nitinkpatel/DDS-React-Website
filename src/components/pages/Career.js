import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CardItem from '../CardItem';

function AboutUs() {
    return (
        <>
        <main>
        <div className='cards__wrapper'>

         <ul className='cards__items'>
            <CardItem
                src='images/hiring.jpg'
                text='Drop your CV+Portfolio on delodesignarchitects.portfolio@gmail.com'
                label='Open Position: Intern'
                path='/Contact-Us'
            />
             <CardItem
                src='images/hiring.jpg'
                text='Drop your CV+Portfolio on delodesignstudio@gmail.com'
                label='Open Position: Designer'
                path='/Contact-Us'
            />
      
            </ul>

</div>
</main>
            <Footer />
            </>
    )
}

export default AboutUs
