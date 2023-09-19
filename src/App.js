import React from "react";

function App() {

const fname="Julie"
const lname="Mish"
const randomNumber=Math.floor(Math.random()*11)+1
const currentDate=new Date().getFullYear()
const randomImage="https://picsum.photos/200"
const useJsToStyle={
  color:"red",
  fontSize:"20px",
  border:"1px solid black"
}
useJsToStyle.color="pink"


console.log(currentDate);
  return (
    <div className="App">
    <h1>hello {fname+" "+lname}</h1>
    <p>this is th ecurrent year: {currentDate}</p>
    {/* way2:ES6 template literal:  */}
    {/* <h1>hello {`${fname} ${lname}`}</h1> */}
    <p>This is a random number between 1 to 10 with floor method: {randomNumber} </p>
    <img src={randomImage + "?grayscale"} alt="this is a random pic in grey"/>
   <div style={{color:"red"}}>this is inline styling, which inject js to jsx. </div>
   <div style={useJsToStyle}>this is inline styling method 2, which inject js to jsx. </div>
   
    </div>
  );
}

export default App;
