import React from 'react';
import '../App.css';
import './Location.css';


function Location() {
  return (  
        <div className='container'>
          <img 
           src='/images/visit.jpg' className='visit'
           />
       
           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14877.397779893523!2d72.8562159!3d21.2179873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xef4ee65111730bb6!2sDelo%20design%20Architects!5e0!3m2!1sen!2sca!4v1640557475730!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" 
           width="600"
           height="450"
           frameBorder="0"
           style={{ border: 0 }}
           allowFullScreen=""
           aria-hidden="false"
           tabIndex="0">
             </iframe>  
      
           </div>    
  );
}

export default Location;