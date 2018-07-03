import React, { Component } from 'react';

// creates a class component that serves as our searchbar
class SearchBar extends Component {
// extends React component 
  constructor(props) {
    super(props);
    this.state = {
    term: ''
    }
  }
  
  render() {
    return (
      <div className="search-bar">
      <input 
      placeholder='Search through Pictsy (ex: "Cats"):'
      value= {this.state.term}
      onChange= {event => this.onInputChange(event.target.value) } />
      </div>
    );
  };
// changes the state of the 'search' term as well as calls the prop method from index.js
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar