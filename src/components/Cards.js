import React, { Component } from "react";
import "../App.css";

class Cards extends Component {
  render() {
    return this.props.gameCards.map((gameCards) => (
      <div className="card grow cardWidth col-lg-3 p-1 m-0 shadow" 
      onClick={this.props.handleClick.bind (this, gameCards.id)}>
        <div className="card-body p-1 m-0" id={gameCards.id}>
          <img className={gameCards.shake} alt={gameCards.name} src={gameCards.image}></img>
        </div>
      </div>
    ));
  }
}

export default Cards;
