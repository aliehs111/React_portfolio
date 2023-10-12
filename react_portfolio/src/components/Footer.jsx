import React from 'react';
import Card from 'react-bootstrap/Card';
import './Page.css';

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
              <img src="/assets/github-mark.png" alt="GitHub" className="logo" />
            </a>

            <a
              href="https://www.heroku.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/heroku-logo-solid-gradient.png" alt="Heroku" className="logo" />
            </a>
          </div>
        </Card.Body>
      </Card>
      <p className='text-center'>2023</p>
    </div>
  )
}

export default Footer;
