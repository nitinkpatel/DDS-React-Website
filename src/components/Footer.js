import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/About-Us'>Our Team</Link>
            <Link to='/Testi'>Testimonials</Link>
            <Link to='/Career'>Careers</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Follow Us</h2>
            <Link to='/Social'>Instagram</Link>
            <Link to='/Social'>Facebook</Link>
            <Link to='/Social'>Twitter</Link>
            
          </div>
        </div>
      </div>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
          <small class='website-rights'> Copy Rights Reserved by Delo Design Studio © 2020</small>
          </div>
          <br/>
          <>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/Social'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/Social'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/Social'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/Social'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/Social'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
          </>
        
          </div>

      </section>

    </div>
  );
}

export default Footer;