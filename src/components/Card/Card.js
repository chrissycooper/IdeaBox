import React from 'react'
import './Card.css'

const Card = ({idea, deleteIdea}) => {
  const {id, title, description} = idea;

  return (
    <div className='card' id={id}>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <button onClick={() => {deleteIdea(id)}}>&times;</button>
    </div>
  )
}

export default Card