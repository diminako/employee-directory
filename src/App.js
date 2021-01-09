import React, { Component } from "react";
import Card from "./components/Card";
import Heading from "./components/Heading";
import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";
import './App.css';
import { get } from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      people: []
    };
  }

  componentDidMount() {
    const getPeople = async () => {
      const { data: { results } } = await get('https://randomuser.me/api/?results=10&nat=us')
      console.log(results)
      this.setState({ people: results })
    }
    getPeople()
  }


  render() {
    const { people } = this.state;
    return (
      <div className="App" >
        <Heading />
        <SearchBar />
        <CardList />





        {/* {this.state.people.map(peep =>(<h1 key={peep.id} peep={peep}> {peep.name.first}</h1>))} */}
      </div>
    )
  }
};

export default App;
