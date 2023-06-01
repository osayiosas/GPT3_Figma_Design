import React from 'react'

import './footer.css'

import logo from '../../assets/logo.svg'

function Footer() {
  return (
    <div className="gpt3__footer section__padding" id="">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="logo" />
          <p>Ikeja, Lagos Nigeria. All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Ovrons</p>
          <p>Social Media</p>
          <p>Country</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Ikeja, Lagos Nigeria.</p>
          <p>234-815-237-7970</p>
          
        </div>
      </div>

      <div className="gtp3__footer-copyright">
        <p>
            © 2023. All rights reserved     
        </p>
      </div>
    </div>
  );
}

export default Footer