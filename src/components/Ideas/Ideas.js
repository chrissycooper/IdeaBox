import React from "react";
import "./Ideas.css";
import Card from "../Card/Card";

const Ideas = ({ ideas, deleteIdea }) => {

  const ideaMap = ideas.map((idea) => {
    return <Card title={idea.title} desc={idea.desc} key={idea.id} deleteIdea={deleteIdea} id={idea.id}/> 
  })

  return (
    <>
      <h2> Here are my Ideas </h2>
      <div className="ideas-container">
        {ideaMap}
      </div>
    </>
  )
}

export default Ideas;
