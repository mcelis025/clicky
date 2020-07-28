import React, { Component } from "react";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import gameCards from "./gameCards.json";
import "./App.css";

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    message: "Click an image to begin!",
    gameCards,
  };

  handleClick = (id) => {
    if (this.state.score < 12 && gameCards.clicked === false) {
      this.setState({ clicked: true }) 
      this.setState({ score: this.score++ })
      this.shuffle();
    } else if (this.state.score === 12) {
        this.setState({ message: "YOU WIN!" })
        this.setState({ score: 0 })
        this.setState({ topScore: 12 })
        this.shuffle();

    } else if (gameCards.clicked === true) {
        this.setState({ message: "YOU LOSE!"})
        this.setState({ score: 0 })
        this.shuffle();
    }
    alert(id);
  }

  increaseHighScore = () => {

  }

  shuffle = () => {
    for (let i=0; i<gameCards.length; i++) {
      let randomCards = Math.floor(Math.random() * gameCards.length);
      console.log(randomCards);
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar 
        message={this.state.message}
        score={this.state.score}
        highScore={this.state.highScore}
        />

        <div className="container">
          <div className="row no-gutters">
            <Cards 
            key={this.state.gameCards.id}
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
