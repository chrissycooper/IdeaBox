import React, { useState } from "react";
import "./App.css";
import Ideas from "../Ideas/Ideas";

const App = () => {
  const [ideas, setIdeas] = useState([
    {id: 1, title: "Bike", desc: "I want to ride my bicycle, I want to ride my bike."},
    {id: 2, title: "Thirsty or Sad?", desc: "Try drinking a full glass of water before giving up on yourself."},
    {id: 3, title: "Hot Girl Walk", desc: "Doesn't matter how long, just get out there <3"}
  ])
 
    return (
      <div className="app-container">
        <h1>I have an Idea 💡</h1>
        <Ideas ideas={ideas}/>
      </div>
    )
}

export default App;
