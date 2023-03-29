import React, {Component} from "react";
import Ideas from "../Ideas/Ideas";
import Form from "../Form/Form";
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [
        
      ],
      isLoading: true
    }
  }

  addIdea = (newIdea) => {
    this.setState({ideas: [...this.state.ideas, newIdea]})
  }

  deleteIdea = (id) => {
    console.log(id)
    const ideasToKeep = this.state.ideas.filter(idea => idea.id !== id)
    this.setState( { ideas: ideasToKeep })
  }

  render(){
    return (
      <main className='App'>
        <h1>Ideabox</h1>
        <Form addIdea={this.addIdea} />
          {!this.state.ideas.length && <h2>No Ideas Yet! Let's add some!</h2> }
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea}/>
      </main>
    )
  }
}

export default App;
