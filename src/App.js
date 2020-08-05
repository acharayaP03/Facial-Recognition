import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import  Logo   from "./components/Logo/Logo";
import  Rank   from "./components/Rank/Rank";
import app from './API'
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Navigation from "./components/navigation/Navigation";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

class App extends Component {

  constructor(){
    super()
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value})
  }
  onButtonSubmit = () =>{
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function(response) {
        // do something with response
        //look into the console log for the response
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err) {
        // there was an error
      }
    );
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
          <Rank />
          <ImageLinkForm onInputChange= {this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
