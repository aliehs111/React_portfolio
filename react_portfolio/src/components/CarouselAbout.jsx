import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import TestImage from '../assets/TestImage.png';
import GardenImage from '../assets/garden.png';
import NewHiveImage from '../assets/hive_new.png';
import JateImage from '../assets/text_editor.png';
import WkDayImage from '../assets/workday_scheduler.png';
import GtHubImage from '../assets/github-mark.png';
import EmpTrkrImage from '../assets/employee_tracker.png';
import RmeImage from '../assets/r-me.png';
import HrkImage from '../assets/heroku-logo-solid-gradient.png';
import SvgLgImage from '../assets/logo.png';
import SocNetImage from '../assets/social_network_api.png';
import CdQzImage from '../assets/code_quiz.png';
import RctImage from '../assets/logo512.png';
import EcomBkImage from '../assets/ecommerce_backend.png';
import WthrImage from '../assets/weather_dashboard.png';
import PsswrdGenImage from '../assets/password.jpg';
import NtTkImage from '../assets/express-note.png';
import './Page.css';

const carouselItems = [
  {
    imagePath: TestImage,
    altText: 'App for kids!',
    title: 'Activity App for Kids',
    description: '',
  },
  {
    imagePath: GardenImage,
    altText: 'gardening app',
    title: '',
    description: '',
  },

  {
    imagePath: NewHiveImage,
    altText: 'Hive',
    title: '"The Hive" Event Planner',
    description: '',
  },
  {
    imagePath: JateImage,
    altText: 'text editor',
    title: 'PWA text Editor (JATE)',
    description: '',
  },
  {
    imagePath: WkDayImage,
    altText: 'scheduler',
    title: 'Work Day Scheduler',
    description: 'A simple work day scheduler',

  },
  {
    imagePath: GtHubImage,
    altText: 'github logo',
    title: '',
    description: '',
    
  },
  {
    imagePath: EmpTrkrImage,
    altText: 'employee tracker',
    title: 'MySQL Employee Tracker',
    description: '',
  },
  {
    imagePath: RmeImage,
    altText: 'readme generator',
    title: 'README Generator',
    description: '',
  },
  {
    imagePath: HrkImage,
    altText: 'heroku logo',
    title: '',
    description: '',
  },
  {
    imagePath: SvgLgImage,
    altText: 'logo sample',
    title: 'SVG Logo Maker__',
    description: '',
  },
  {
    imagePath: SocNetImage,
    altText: 'social network api',
    title: 'Social Network API Backend',
    description: '',
  },
  {
    imagePath: CdQzImage,
    altText: 'code quiz',
    title: '',
    description: '',
  },
  {
    imagePath: RctImage,
    altText: 'react logo',
    title: '',
    description: '',
  },
  {
    imagePath: EcomBkImage,
    altText: 'ecommerce backend',
    title: 'Ecommerce Backend',
    description: '',
  },
  {
    imagePath: WthrImage,
    altText: 'weather dashboard',
    title: 'Weather Dashboard',
    description: '',
  },
  {
    imagePath: PsswrdGenImage,
    altText: 'password generator',
    title: '',
    description: '',
  },
  {
    imagePath: NtTkImage,
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
