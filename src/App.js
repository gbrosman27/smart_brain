import React, { Component } from 'react';
import Navigation from './components/Navigation/navigation';
import SignIn from './components/SignIn/signin';
import Register from './components/Register/register';
import Logo from './components/Logo/logo';
import Rank from './components/Rank/rank';
import ImageLinkForm from './components/ImageLinkForm/imagelinkform';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
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


// Define API key for Clarifai.
const app = new Clarifai.App({
  apiKey: "210d2a156ea6429681382204606643d7",
});


class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin'
    }
  }


  // Input to the imagelinkform.
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  // data comes from Clarifai API
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
     }    
  }


  displayFaceBox = (box) => {
    this.setState({box: box});
  }


  // Face detect model from Clarifai API. Finds location of faces as percentages of the whole image (bounding_box).
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={ particlesOptions } />
        <Navigation onRouteChange={this.onRouteChange} />
        {/* if this.state.route === signin is true, return signin component, else return everything in the div */}
        { this.state.route === 'home' ?
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={ this.onInputChange } onButtonSubmit={ this.onButtonSubmit } />      
            <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} /> 
          </div>
          : (
            this.state.route === 'signin' ?
            <SignIn onRouteChange={this.onRouteChange}/> :
            <Register onRouteChange={this.onRouteChange} />
            )          
        }
      </div>
    );
  }
}


export default App;