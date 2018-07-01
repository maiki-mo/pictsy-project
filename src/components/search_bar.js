import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
    term: ''
    }
  }
  
  render() {
    return (
      <div className="search-bar">
      <h5>Type in subject to return pictures:</h5>
      <input 
      placeholder='cats'
      style= {{ width: '500px', marginRight: '40px' }}
      value= {this.state.term}
      onChange= {event => this.onInputChange(event.target.value) } />
      <input type="submit" style= {{ width: '100px' }} />
      </div>
    );
  };

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar