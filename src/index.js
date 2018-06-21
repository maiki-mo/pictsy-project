import React from 'react';
import ReactDOM from 'react-dom';

// create a new component
// component produces some html

const App = (() => {
  return <div>Hi!</div>
});

// make sure it finds its way into the dom

ReactDOM.render(<App />, document.querySelector('.container'));