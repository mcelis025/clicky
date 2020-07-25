import React from "react";

function Navbar(props) {
  return (

    <div>
      <nav className="navbar">
        <div className="text-center">Clicky Game</div>
        <div className="text-center">{props.message}</div>
        <div className="text-center">Score: {props.score} Highscore: {props.topScore}</div>
      </nav>
      <div className="jumbotron jumbotron-fluid text-center">
        <h1 className="display-1">Clicky Game!</h1>
        <h4>Click on an image to earn points, but don't click on any more than once!</h4>            
      </div>
    </div>
  );
}

export default Navbar;