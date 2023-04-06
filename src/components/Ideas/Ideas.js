import React from 'react';
import './Ideas.css';
import Card from '../Card/Card';

const Ideas = ({ideas, deleteIdea}) => {
  
const ideaCards = ideas.map(idea => {
  
  return <Card idea={idea} key={idea.id} tabIndex={0} deleteIdea={deleteIdea}/>
})
  return (
    <div className='ideas-container'>
      {ideaCards}
    </div>
  )
}

export default Ideas;