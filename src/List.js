import React from "react";

function List() {
  const toBuy = ["apple", "banana", "orange"];
  return toBuy.map((item) => {
    const uniqueKey=Date.now() + Math.random()
    return <li key={uniqueKey}>this is {item}</li>;
   
  });
}


export default List;
