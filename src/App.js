import './App.css';
import React from "react";

export default class App extends React.Component{
  state = {
    loading: true,
    person: null,
  }

  async componentDidMount(){
    const url = "https://scpdatabase-0fe9.restdb.io/rest/data";
    const response = await fetch(url, {method: 'GET',
      headers: 
      { 'cache-control': 'no-cache',
          'x-apikey': '6099da8fe3b6e02545eda6a8' }});
    const data = await response.json();
    this.setState({person: data[0], loading: false});
  }

  render(){
    return(
      <div>
        {this.state.loading || !this.state.person ? (
          <div>loading...</div>
        ) : (
          <div>
            <div>{this.state.person.scpNumber}</div>
            <div>{this.state.person.scpObjectClass}</div>
            <div>{this.state.person.scpSCP}</div>
            <div>{this.state.person.scpDescription}</div>
          </div>
        )}
      </div>
    );
  }

}
