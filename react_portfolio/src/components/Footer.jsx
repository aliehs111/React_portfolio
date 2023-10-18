import React from 'react';
import Card from 'react-bootstrap/Card';
import './Page.css';
import GhImage from "../assets/github-mark.png";
import HerImage from "../assets/heroku-logo-solid-gradient.png";
import LiImage from "../assets/LI-In-Bug.png";


function Footer() {
  return (
    <div className='footer'>
      <Card className='footer'>
        <Card.Header className='text-center'>Sheila McGovern </Card.Header>
        <Card.Body>
          <div className="social-icons">
            <a
              href="https://github.com/aliehs111/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GhImage} alt="GitHub" className="logo" />
            </a>

            <a
              href="https://www.heroku.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={HerImage} alt="Heroku" className="logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/sheila-mcgovern-7a633669/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LiImage} alt="Heroku" className="logo" />
            </a>
          </div>
        </Card.Body>
      </Card>
      <p className='text-center'>2023</p>
    </div>
  )
}

export default Footer;
