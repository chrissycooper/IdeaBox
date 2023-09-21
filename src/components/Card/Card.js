import React from "react";
import "./Card.css";

const Card = ({title, desc, id, deleteIdea}) => {

  return (
    <div className="card">
      <h3>{title}</h3>
      <p> {desc}</p>
      <button onClick={()=>{deleteIdea(id)}}>&times;</button>
    </div>
  )
}

export default Card;