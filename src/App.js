import React from "react";

function App() {

const fname="Julie"
const lname="Mish"
const randomNumber=Math.floor(Math.random()*11)+1

  return (
    <div className="App">
    <h1>hello {fname+" "+lname}</h1>
    {/* way2:ES6 template literal:  */}
    <h1>hello {`${fname} ${lname}`}</h1>
    <p>This is a random number between 1 to 10 with floor method: {randomNumber}</p>
    </div>
  );
}

export default App;
