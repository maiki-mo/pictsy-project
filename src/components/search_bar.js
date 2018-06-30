import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term: '' }
  }
  
  render() {
    return (
      <div className="search-bar">
      <input 
      value = {this.state.term}
      onChange = {event => this.onInputChange(event.target.value) } /> <br />
      <input style={{ display: 'inline-block', width: '40px' }} type="checkbox" name="viral" /><label>Viral</label>
      <input style={{ display: 'inline-block', width: '40px' }} type="checkbox" name="SFW"/><label>SFW</label>
      <input style={{ display: 'inline-block', width: '40px' }} type="checkbox" name="Animated"/><label>Animated</label>
      </div>
    );
  };

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar