import React from "react";


export default function Footer() {

    return (
        <div className="footer-component">
             <div className="coded-by">Created by
          <a href="https://github.com/dmusiol"> Dominika Musioł</a></div>
          <small className ="social-media">
            <h3>Social media</h3>
            <a href="https://www.linkedin.com/in/dominika-musio%C5%82/">
              <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/000/729/original/linkedin.png?1587980661" alt="LinkedIn" width="35px"></img>
            </a>
            <a href="https://www.facebook.com/dominikabm/">
              <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/000/727/original/facebook.png?1587980079" alt="Facebook" width="35px"></img>
            </a>
            <a href="https://www.instagram.com/bydomi07/">
              <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/000/728/original/instagram.png?1587980326" alt="Instagram" width="35px"></img>
            </a>
          </small>
        </div>
    )
}