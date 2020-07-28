import React, { Component } from "react";
import "../App.css";

class Cards extends Component {
  render() {
    return this.props.gameCards.map((gameCards) => (
      <div className="card cardWidth col-lg-3 p-0 m-1 shadow" 
      onClick={this.props.handleClick.bind (this, gameCards.id)}>
        <div className="card-body p-1" id={gameCards.id}>
          <img alt={gameCards.name} src={gameCards.image}></img>
        </div>
      </div>
    ));
  }
}

export default Cards;
