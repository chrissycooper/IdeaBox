import React from "react";
import './App.css';
import Ideas from "../Ideas/Ideas";
import Form from "../Form/Form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }

  addIdea = (freshIdea) => {
    this.setState({ideas: [...this.state.ideas, freshIdea]})
  }

  deleteIdea = (id) => {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({ideas: filteredIdeas})
  }

  render() {
    return (
      <main className="App">
        <h2>Idea Box</h2>
        <Form addIdea={this.addIdea} />
        {!this.state.ideas.length && <h2>No ideas yet! let's add some</h2>}
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea}/>
      </main>
    )
  }
}

export default App