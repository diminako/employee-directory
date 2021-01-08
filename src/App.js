import React, { Component } from "react";
import './App.css';

class App extends Component {
constructor() {
  super();
  this.state = {
    search: "",
    people: []
  };
}

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(users => this.setState({people: users}));
  }



  render() {
    const { people } = this.state;

    return (
      <div className="App" >
        <header>Employee List</header>
        {/* {this.state.people.map(peep => (
            <h1 key={peep.id} peep={peep}>{peep.name.first}</h1>
        ))} */}

        {console.log(people)}
      
      </div>

    )
  }
};

export default App;
