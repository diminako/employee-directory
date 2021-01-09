import React, { Component } from "react";
// import Card from "./components/Card";
import Heading from "./components/Heading";
import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";
import './App.css';
import { get } from 'axios';

const style = {
  padding: "20px",
  color: "#e7e7de"
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchField: "",
      people: []
    };
  }

  componentDidMount() {
    const getPeople = async () => {
      const { data: { results } } = await get('https://randomuser.me/api/?results=20&nat=us')
      this.setState({ people: results })
    }
    getPeople()
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { people, searchField } = this.state;
    const sortedPeople = people.sort((a, b) => {
      
    })
    const filteredEmployees = people.filter(employee => employee.name.first.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div style={style} className="App">
        <Heading />
        <SearchBar
        placeholder=""
        handleChange={this.handleChange} />
        <CardList people={filteredEmployees} />
      </div>
    )
  }
};

export default App;
