import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyDjAGBO-yMQ_dJZpho2JbtY_kLueEeNul0";

// create a new component
// component produces some html

const App = (() => {
  return <div>
    < SearchBar /> 
  </div>
});

// make sure it finds its way into the dom

ReactDOM.render(<App />, document.querySelector('.container'));