import React, { useState } from "react";
import "./App.css";
import Ideas from "../Ideas/Ideas";

const App = () => {
  const [ideas, setIdeas] = useState([
    {title: "Bike", desc: "I want to ride my bicycle, I want to ride my bike."},
    {title: "Thirsty or Sad?", desc: "Try drinking a full glass of water before giving up on yourself."},
    {title: "Hot Girl Walk", desc: "Doesn't matter how long, just get out there <3"}
  ])
 
    return (
      <div className="app-container">
        <h1>I have an Idea 💡</h1>
        <Ideas />
      </div>
    )
}

export default App;
