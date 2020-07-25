import React, { Component } from "react";

class Cards extends Component {
  render() {
    return (
    
      <div className="card-columns">
        <div className="card bg-primary">
          <div className="card-body text-center">
            <p className="card-text">Some text inside the first card</p>
          </div>
        </div>
        <div className="card bg-warning">
          <div className="card-body text-center">
            <p className="card-text">Some text inside the second card</p>
          </div>
        </div>
        <div className="card bg-success">
          <div className="card-body text-center">
            <p className="card-text">Some text inside the third card</p>
          </div>
        </div>
        <div className="card bg-danger">
          <div className="card-body text-center">
            <p className="card-text">Some text inside the fourth card</p>
          </div>
        </div>
        <div className="card bg-light">
          <div className="card-body text-center">
            <p className="card-text">Some text inside the fifth card</p>
          </div>
        </div>
          <div className="card bg-info">
            <div className="card-body text-center">
              <p className="card-text">Some text inside the sixth card</p>
            </div>
          </div>
        </div>

    );
  }
}

export default Cards;
