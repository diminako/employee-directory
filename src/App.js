import React, { Component } from "react";
import './App.css';
import {get} from 'axios'
class App extends Component {
constructor() {
  super();
  this.state = {
    search: "",
    people: []
  };
}

  componentDidMount() {
    const getPeople = async ()=>{
      const {data:{results}} = await get('https://randomuser.me/api/?results=10&us')
      console.log(results)
      this.setState({people: results})
    }
    getPeople()
  }


  render() {
    const { people } = this.state;
    return (
      <div className="App" >
        <header>Employee List</header>
        {this.state.people.map(peep => (
            <h1 key={peep.id} peep={peep}>{peep.name.first}</h1>
        ))}

        {/* {console.log(typeof people)} */}
      </div>
    )
  }
};

export default App;
