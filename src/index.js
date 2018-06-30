import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
import Fetch from 'whatwg-fetch';
var apiKey = '9ed18dc91dbbcc7';


// const API_KEY = "AIzaSyDjAGBO-yMQ_dJZpho2JbtY_kLueEeNul0";

// window.api = function (url) {
//   var rootUrl = 'https://api.imgur.com/3/topics/';
//   var apiKey = process.env.IMGUR_CLIENT_ID;
//   return fetch(rootUrl + url, {
//     headers: {
//       'Authorization': 'Client-ID ' + apiKey
//     }
//   }).then ((res) => {
//     return res.json();
//   }).then ((data) => {
//     console.log(data);
//     // this.setState({
//     //   videos: 
//     // })
//   })
// }

// create a new component
// component produces some html

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.imgSearch('defaults');
  }

  imgSearch(term) {
    var rootUrl = 'https://api.imgur.com/3/topics/';
    return fetch(rootUrl + term, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    }).then ((res) => {
      return res.json();
    }).then ((data) => {
      this.setState({
        videos: data.data,
        selectedVideo: data.data[0]
      })
    })
  }

  render() {
    const imgSearch = _.debounce((term) => {
      this.imgSearch(term)
    }, 300); 

    return (
      <div>
      < SearchBar onSearchTermChange={ imgSearch }/>
      < VideoDetail video={ this.state.selectedVideo }/>
      < VideoList 
        onVideoSelect={ selectedVideo => this.setState({ selectedVideo })}
        videos={ this.state.videos } />
    </div>
    );
   }
};

// make sure it finds its way into the dom

ReactDOM.render(<App />, document.querySelector('.container'));