import React from "react";
import "../App.css";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar border-bottom border-dark fixed-top mb-5">
        <div className="navText text-center">JoJo Clicky Game</div>
        <div className="navText text-center">{props.message}</div>
        <div className="navText text-center">
          Score: {props.score} Highscore: {props.highScore}
        </div>
      </nav>
      <div className="jumbotron jumbotron-fluid border-bottom border-dark text-center text-light textShadow jumboImg opacity mt-5">
        <h1 className="display-1">Clicky Game!</h1>
        <h4>
          Click on an image to earn points, but don't click on any more than
          once!
        </h4>
      </div>
    </div>
  );
}

export default Navbar;
