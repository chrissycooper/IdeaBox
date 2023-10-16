import React, { useState } from "react";
import "./Form.css"


const Form = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleClick = () => {
    
  }
  const handleChange = event => {
    setTitle(event.target.value)
  }

  return (
      <form>
        <input 
        type="text" 
        placeholder="Title" 
        name="title"
        value={title}
        onChange={event => handleChange(event)}
        />

  
        <button onClick={() => {handleClick()}}>plus one</button>
      </form>
  )
}

export default Form;