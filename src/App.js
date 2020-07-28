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

  handleClick = (id) => {
    // if (this.state.score < 12 && this.gameCards.clicked === false) {
    //   this.setState({gameCards: }) 
    // }
    alert(id);
  }

  wrong = () => {

  }

  shuffle = () => {

  }

  render() {
    return (
      <div className="App">
        <Navbar 
        message={this.state.message}
        score={this.state.score}
        topScore={this.state.topScore}
        />

        <div className="container">
          <div className="row no-gutters">
            <Cards 
            gameCards={this.state.gameCards} 
            handleClick={this.handleClick} />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
