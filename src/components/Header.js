import React from 'react';
import './Header.css'
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className="main-info">
        <h1>Web Developments and Websites Promotion</h1>
        <Typed 
        className="typed-text" 
        strings={['MySQL','Google Firebase','MongoDB', 'Web Design', 'Web Development']}
        typeSpeed={40} backSpeed={60} loop>
        </Typed> 
        <a href="#" className='btn-main-offer'>Contact Me</a>       
      </div>
    </div>
  );
};

export default Header;