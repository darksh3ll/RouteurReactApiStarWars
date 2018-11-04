import React, { Component } from 'react';
import './App.css';
import axios from  "axios"
// import DisplayScore from './DisplayScore';
import SearchBar from "./SearchBar";
import Display2 from "./Display2";

class App extends Component {
    state = {
        characteres:[],
        input:""
    };
    lettreCapitalize = (str) => {
        const arr = str.split(" ");
        const arrCapitalize =  arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
        return arrCapitalize.join(" ")
    };
    handleChange = (e) => {
        let capitalize = this.lettreCapitalize(e.target.value);
        this.setState({input:capitalize});
    };
    FetchData = async () => {
        const data = await axios.get("https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json");
        this.setState({characteres:data.data})
    };

    componentDidMount(){
        this.FetchData()
    }

  render() {
    return (
      <div className="App">
            <SearchBar
                change={this.handleChange}
            />
            <Display2
                peoples={this.state.characteres}
                valeur={this.state.input}
            />
      </div>
    );
  }
}

export default App;
