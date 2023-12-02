import logo from './logo.svg';
import './App.css';
import Buttongroupcomponent from './components/Buttongroupcomponent';
import Validationcomponent from './components/Validationcomponent';
import Carouselcomponent from './components/Carouselcomponent';
import Modelcomponent from './components/Modelcomponent';


function App() {
  return (
    <div className="App">
     
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
       {/* <Buttongroupcomponent/> */}
        {/* <Validationcomponent/>  */}
      <Carouselcomponent/><br/>
      <Modelcomponent/>
    
     
    </div>
  );
}

export default App;
