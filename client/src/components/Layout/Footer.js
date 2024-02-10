import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p className='footer-heading text-center'>
        
          <Link to='/about'>
            ABOUT
          </Link>
          <Link to='/contact'>
            CONTACT
          </Link>
          <Link to='/policy'>
            POLICY
          </Link>
        </p>

      

      <hr />
      
      <div className="logo">SHOPIFY</div>
      
    </div>
  );
};

export default Footer;
