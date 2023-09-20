import React, { useState } from "react";
import "./App.css";
import Ideas from "../Ideas/Ideas";

const App = () => {
  const [ideas, setIdeas] = useState([])
 
    return (
      <div className="app-container">
        <h1>I have an Idea 💡</h1>
        <Ideas />
      </div>
    )
}

export default App;
