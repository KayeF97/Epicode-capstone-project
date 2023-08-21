import Carousel from 'react-bootstrap/Carousel';
import image1 from './liftingimg1.jpg'
import image2 from './liftingimg2.jpg'
import image3 from './liftingimg3.jpeg'
import './StartCarousel.css'



function StartPics() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          id="chinspic"
          className="d-block w-100"
          src={image1}
          alt="woman curling"
          width="100px"
          height="300px"
        />
        <Carousel.Caption>
          <h3>Chin ups</h3>
        </Carousel.Caption>


      </Carousel.Item>
      <Carousel.Item>
        <img
          id="deadspic"
          className="d-block w-100"
          src={image2}
          alt="woman deadlift"
          width="100px"
          height="300px"
        />
        <Carousel.Caption>
          <h3>Deadlifts</h3>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          id="curlspic"
          className="d-block w-100"
          src={image3}
          alt="Bicep Curl"
          width="100px"
          height="300px"
        />
     <Carousel.Caption>
          <h3>Bicep Curl</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default StartPics;
