import React from "react";

function App() {

const name="Julie"
const randomNumber=Math.floor(Math.random()*10)+1

  return (
    <div className="App">
    <h1>hello {name}</h1>
    <p>This is a random number between 1 to 10 with floor method: {randomNumber}</p>
    </div>
  );
}

export default App;
