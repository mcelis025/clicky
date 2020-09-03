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
    let gCard = this.state.gameCards.find((gameCards) => gameCards.id === id)
    if (gCard.clicked === false && this.state.score < 11) {

      this.setState({ message: "" });
      this.increaseHighScore();
      this.increaseScore();
      this.shuffle();
      this.removeShake();
      gCard.clicked = true;

    } else if (gCard.clicked === false && this.state.score === 11) {

        this.setState({ message: "WINNER! WINNER! CHICKEN DINNER!" });
        this.setState({ score: 0 });
        this.setState({ highScore: 12 });
        this.shuffle();
        this.resetCards();

    } else if (gCard.clicked === true) {

        this.setState({ message: "YOU LOSE! TRY AGAIN!"});
        this.setState({ score: 0 });
        this.shuffle();
        this.resetCards();
        this.shake();
    }
  }

  shake = () => {
    this.setState({ shake: "shake" });
  }

  removeShake = () => {
    this.setState({ shake: "" });
  }

  increaseHighScore = () => {
    if (this.state.score === 0) {
      this.setState({ highScore: 1 });
    }
    if (this.state.score >= 1) {
      this.setState({ highScore: this.state.highScore +1 })
    }
  }

  resetCards = () => {
    this.state.gameCards.forEach((gameCards) => (
      gameCards.clicked = false
    ));
  }

  increaseScore = () => {
    this.setState({ score: this.state.score + 1 });
  }

  shuffle = () => {
    this.state.gameCards.sort(() => Math.random() - 0.5);
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
          <div className="row">
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
