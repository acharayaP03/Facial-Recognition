import React, { Component } from 'react';
import Particles from 'react-particles-js';
import  Logo   from "./components/Logo/Logo";
import  Rank   from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Navigation from "./components/navigation/Navigation";

class App extends Component {
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
          <ImageLinkForm />
      </div>
    );
  }
}

export default App;
