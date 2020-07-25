import React, { Component } from "react";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

class App extends Component {

  state = {
    cards: [
      {
        clicked: false
      }
    ]
  }  

  render () {
    return (
      <div className="App">
        <Navbar />
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default App;