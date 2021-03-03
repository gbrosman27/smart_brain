import React, { Component } from 'react';
import Navigation from './components/Navigation/navigation';
import Logo from './components/Logo/logo';
import Rank from './components/Rank/rank';
import ImageLinkForm from './components/ImageLinkForm/imagelinkform';
import Particles from 'react-particles-js';
// import Clarifai from 'react-clarifai-js';
import FaceRecognition from './components/FaceRecognition/facerecognition';
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
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  // Input to the imagelinkform.
  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    console.log('click');
    app.models.predict(Clarifai.COLOR_MODEL, "https://samples.clarifai.com/face-det.jpg")
    .then(function(response) {
        console.log(response);
      },
      function(err) {
        console.log(err);
      }
    );
  }


  render() {
    return (
      <div className="App">
        <Particles className='particles' params={ particlesOptions } />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={ this.onInputChange } onButtonSubmit={ this.onButtonSubmit } />      
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}


export default App;