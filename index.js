// import all docs we need for react
import React from 'react';
import ReactDOM from "react-dom"
// import all child elements
import Star from "./Star";
import Rating from "./Rating";
// import style sheet
import "./styles.css";

// main app component, parent element
function App() {
  return(
    <div className="App">
      <h2>Star Components:</h2>
      <Star color="pink" isFilled />
      <Star color="magenta" />
      <Star color="indigo" isFilled />
      <h2>Rating Component (uses Stars):</h2>
      <Rating stars={4} />
    </div>
  );
};

// declaring root element for react to render to
const rootElement = document.getElementById("root");
// ReactDOM.render method renders the app
ReactDOM.render(<App />, rootElement);