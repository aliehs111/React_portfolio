import Carousel from 'react-bootstrap/Carousel';

function AboutCarousel() {
    const containerStyle = {
        width: '450px', 
        height: '300px', 
        overflow: 'hidden', 
      };
      const imageStyle = {
        width: '100%',
        height: '300px', // Match the container height
        objectFit: 'cover', // Preserve aspect ratio and cover the container
      };
  return (
    <div style={containerStyle} className='carousel-container'>
    <Carousel>
      <Carousel.Item>
        <img src={process.env.PUBLIC_URL + '/assets/TestImage.png'} alt="First slide" style={imageStyle} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={process.env.PUBLIC_URL + '/assets/TestImage.png'} alt="Second slide" style={imageStyle}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={process.env.PUBLIC_URL + '/assets/TestImage.png'} alt="Third slide" style={imageStyle}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default AboutCarousel;
