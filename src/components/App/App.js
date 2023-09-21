import React, { useState } from "react";
import "./App.css";
import Ideas from "../Ideas/Ideas";

const App = () => {
  const [ideas, setIdeas] = useState([
    {id: 1, title: "Bike", desc: "I want to ride my bicycle, I want to ride my bike."},
    {id: 2, title: "Thirsty or Sad?", desc: "Try drinking a full glass of water before giving up on yourself."},
    {id: 3, title: "Hot Girl Walk", desc: "Doesn't matter how long, just get out there <3"}
  ])

  const deleteIdea = (id) => {
    
    const filteredIdeas = ideas.filter(idea => {
      return idea.id !== id
    })
    console.log(filteredIdeas)
    setIdeas(filteredIdeas)
  }
 
    return (
      <div className="app-container">
        <h1>I have an Idea 💡</h1>
        <Ideas ideas={ideas} deleteIdea={deleteIdea}/>
      </div>
    )
}

export default App;
