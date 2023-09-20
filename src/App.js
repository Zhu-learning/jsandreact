import React from "react";
import List from "./List";

function App() {

const fname="Julie"
const lname="Mish"
const randomNumber=Math.floor(Math.random()*11)+1;
const currentDate=new Date().getFullYear();
const randomImage="https://picsum.photos/200"
const useJsToStyle={
  color:"red",
  fontSize:"20px",
  border:"1px solid black"
}
useJsToStyle.color="pink"
// coding challenge:
// changing greeting accoding to current time 
const colorForGreeting={
  color:"orange"
}
const currentTime=new Date().getHours();
console.log(`to test time, ${currentTime}`)

function currentGreeting(){
  let greeting;
  if (currentTime>5 && currentTime<=12)
     {greeting="morning";
     colorForGreeting.color="blue"}
  else if (currentTime>12 && currentTime<=18)
    {greeting="afternoon";
    colorForGreeting.color="purple"
  }
  else greeting="evening"
  return greeting
}

console.log(currentDate);
  return (
    <div className="App">
    <h1>hello {fname+" "+lname}</h1>
    <p style={colorForGreeting}>Good {currentGreeting()}</p>
    <p>this is the current year: {currentDate}</p>
    {/* way2:ES6 template literal:  */}
    {/* <h1>hello {`${fname} ${lname}`}</h1> */}
    <p>This is a random number between 1 to 10 with floor method: {randomNumber} </p>
    <img src={randomImage + "?grayscale"} alt="this is a random pic in grey"/>
   <div style={{color:"red"}}>this is inline styling, which inject js to jsx. </div>
   <div style={useJsToStyle}>this is inline styling method 2, which inject js to jsx. </div>
   <List />
    </div>
  );
}

export default App;
