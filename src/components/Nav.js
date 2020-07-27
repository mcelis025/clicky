import React from "react";
import "../App.css";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar bg-dark fixed-top">
        <div className="navText text-center">Clicky Game</div>
        <div className="navText text-center">{props.message}</div>
        <div className="navText text-center">
          Score: {props.score} Highscore: {props.topScore}
        </div>
      </nav>
      <div className="jumbotron jumbotron-fluid text-center text-light textShadow jumboImg opacity mt-5">
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
