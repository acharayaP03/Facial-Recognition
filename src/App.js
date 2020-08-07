import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import  Logo   from "./components/Logo/Logo";
import  Rank   from "./components/Rank/Rank";
import app from './API'
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Navigation from "./components/navigation/Navigation";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Signin from "./components/Forms/Signin";
import Register from "./components/Forms/Rejister";

class App extends Component {

  constructor(){
    super()
    this.state = {
      input: '',
      imageUrl: '',
      box: ''
    }
  }

  calculateFaceLocation = (data) =>{
    //look into the console log for the response
    const clarifaiData = data.outputs[0].data.regions[0].region_info.bounding_box;

    const image = document.getElementById('image');
    const width = Number(image.width);
    const height = Number(image.height);

    //here we will return the object to fill the box state
    return {
      leftCol : clarifaiData.left_col * width,
      topRow  : clarifaiData.top_row * height,
      rightCol: width - (clarifaiData.right_col * width),
      bottomRow: height - (clarifaiData.bottom_row * height)
    }
  }

  //this function will receive return value from calculateFaceLocation function. 
  displayFaceBox = (box) => {
    console.log(box)
    this.setState({ box : box })
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () =>{

    this.setState({imageUrl: this.state.input})

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then( response =>this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch( err => console.log(err))

  }
  render(){
    return (
      <div className="App">
        <Particles params={{"particles": {
                            "number": {
                              "value": 100,
                              "density": {
                                "enable": true,
                                "value_area": 500
                              }
                            }
                          }}} className="particles"/>
          <Logo />
          <Navigation />
          <Signin onButtonSubmit={ this.onButtonSubmit }/>
          <Register />
          <Rank />
          <ImageLinkForm onInputChange= {this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box}/>
      </div>
    );
  }
}

export default App;
