import React, { Component } from "react";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import gameCards from "./gameCards.json";
import "./App.css";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    message: "Click an image to begin!",
    gameCards,
  };

  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row no-gutters">
            <Cards gameCards={this.state.gameCards} />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
