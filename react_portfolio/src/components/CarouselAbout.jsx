import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const carouselItems = [
  {
    imagePath: process.env.PUBLIC_URL + '/src/assets/TestImage.png',
    altText: 'App for kids!',
    title: 'Activity App for Kids',
    description: '',
  },
  {
    imagePath: process.env.PUBLIC_URL + '/src/assets/garden.png',
    altText: 'gardening app',
    title: '',
    description: '',
  },

  {
    imagePath: process.env.PUBLIC_URL + '/src/assets/hive_new.png',
    altText: 'Hive',
    title: '"The Hive" Event Planner',
    description: '',
  },
  {
    imagePath: process.env.PUBLIC_URL + '/src/assets/text_editor.png',
    altText: 'text editor',
    title: 'PWA text Editor (JATE)',
    description: '',
  },
  {
    imagePath: process.env.PUBLIC_URL + '/src/assets/workday_scheduler.png',
    altText: 'scheduler',
    title: 'Work Day Scheduler',
    description: 'A simple work day scheduler',

  },
  {
    imagePath: process.env.PUBLIC_URL + '/src/assets/github-mark.png',
    altText: 'github logo',
    title: '',
    description: '',
    
  },
  {
    imagePath: process.env.PUBLIC_URL + '/src/assets/employee_tracker.png',
    altText: 'employee tracker',
    title: 'MySQL Employee Tracker',
    description: '',
  },
  {
    imagePath: process.env.PUBLIC_URL + '/src/assets/r-me.png',
    altText: 'readme generator',
    title: 'README Generator',
    description: '',
  },
  {
    imagePath: process.env.PUBLIC_URL + '/src/assets/heroku-logo-solid-gradient.png',
    altText: 'heroku logo',
    title: '',
    description: '',
  },
  {
    imagePath: process.env.PUBLIC_URL + '/src/assets/logo.png',
    altText: 'logo sample',
    title: 'SVG Logo Maker__',
    description: '',
  },
  {
    imagePath: process.env.PUBLIC_URL + '/src/assets/social_network_api.png',
    altText: 'social network api',
    title: 'Social Network API Backend',
    description: '',
  },
  {
    imagePath: process.env.PUBLIC_URL + '/src/assets/code_quiz.png',
    altText: 'code quiz',
    title: '',
    description: '',
  },
  {
    imagePath: process.env.PUBLIC_URL + '/src/assets/logo512.png',
    altText: 'react logo',
    title: '',
    description: '',
  },
  {
    imagePath: process.env.PUBLIC_URL + '/src/assets/ecommerce_backend.png',
    altText: 'ecommerce backend',
    title: 'Ecommerce Backend',
    description: '',
  },
  {
    imagePath: process.env.PUBLIC_URL + '/src/assets/weather_dashboard.png',
    altText: 'weather dashboard',
    title: 'Weather Dashboard',
    description: '',
  },
  {
    imagePath: process.env.PUBLIC_URL + '/src/assets/password.jpg',
    altText: 'password generator',
    title: '',
    description: '',
  },
  {
    imagePath: process.env.PUBLIC_URL + '/src/assets/express-note.png',
    altText: 'note taker',
    title: '',
    description: '',
  },
];

const containerStyle = {
  width: '100%',
  height: 'auto',
  overflow: 'hidden',
};

const imageStyle = {
  width: '100%',
  height: '500px', // Match the container height
  objectFit: 'cover', // Preserve aspect ratio and cover the container
};

function AboutCarousel() {
  return (
    <div style={containerStyle} className='carousel-container'>
      <Carousel>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <img src={item.imagePath} alt={item.altText} style={imageStyle} />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default AboutCarousel;
