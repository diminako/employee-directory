import React, { Component } from "react";
import Heading from "./components/Heading";
import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";
import SortButtons from "./components/SortButtons";
import './App.css';
import { get } from 'axios';

const style = {
  margin: "0",
  color: "#e7e7de"
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchField: "",
      people: []
    };
  };

  componentDidMount() {
    const getPeople = async () => {
      const { data: { results } } = await get('https://randomuser.me/api/?results=20&nat=us');
      this.setState({ people: results })
    }
    getPeople()
  };

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  sortFirst = (e) => {
    this.setState({ people: e })
  }

  sortLast = (e) => {
    this.setState({ people: e })
  }

  render() {
    const { people, searchField } = this.state;
    const filteredEmployees = people.filter(employee => employee.name.first.toLowerCase().includes(searchField.toLowerCase()));

    return (
      < >
        <div style={style} className="App">
          <Heading />
          <SearchBar
            placeholder=""
            handleChange={this.handleChange}
          />
          <SortButtons
            people={filteredEmployees}
            sortFirst={this.sortFirst}
            sortLast={this.sortLast}
          />
          <CardList
            people={filteredEmployees}
          />
        </div>
      </>
    )
  }
};

export default App;
