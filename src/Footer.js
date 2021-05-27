import React from "react";
import {FaFacebookSquare, FaLinkedin} from 'react-icons/fa';
import {CgInstagram} from 'react-icons/cg';


export default function Footer() {

    return (
        <div className="footer-component">
             <div className="coded-by">Designed and built by Dominika Musioł. Open source on  
          <a href="https://github.com/dmusiol"> GitHub</a>.</div>
          <small className ="social-media">
            <a href="https://www.linkedin.com/in/dominika-musio%C5%82/">
              <FaLinkedin className="sm-icon"/>
            </a>
            <a href="https://www.facebook.com/dominikabm/">
              <FaFacebookSquare className="sm-icon"/>
            </a>
            <a href="https://www.instagram.com/bydomi07/">
              <CgInstagram className="sm-icon"/>
            </a>
          </small>
          <div className="other-work">
            <a href="https://www.dominikamusiol.com/">Frontend Portfolio</a>
            <a href="mailto:dominikamusiol07@gmail.com">Contact</a>
            <a href="https://www.dominikamusiol.com/#projects">My work</a>
          </div>
        </div>
    )
}