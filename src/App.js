import React, { Component } from 'react';
import Navigation from './components/Navigation/navigation';
import Logo from './components/Logo/logo';
import Rank from './components/Rank/rank';
import ImageLinkForm from './components/ImageLinkForm/imagelinkform';
import Particles from 'react-particles-js';
import './App.css';


// Params for the particle background. Located here to keep the return block cleaner.
const particlesOptions = {
  particles: {
    number: {
      value: 150, 
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles' params={ particlesOptions } />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />      
        {/*<FaceRecognition />*/}
      </div>
    );
  }
}


export default App;