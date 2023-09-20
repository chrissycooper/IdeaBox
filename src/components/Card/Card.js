import React from "react";
import "./Card.css";

const Card = ({title, desc, id}) => {

  return (
    <div className="card">
      <h3>{title}</h3>
      <p> {desc}</p>
    </div>
  )
}

export default Card;