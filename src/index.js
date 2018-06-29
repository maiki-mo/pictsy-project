import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
import Fetch from 'whatwg-fetch';

var rootUrl = 'https://api.imgur.com/3/'
var apiKey = process.env.IMGUR_CLIENT_ID

console.log(apiKey);

// const API_KEY = "AIzaSyDjAGBO-yMQ_dJZpho2JbtY_kLueEeNul0";

window.api = function (url) {
  return fetch(rootUrl + url, {
    headers: {
      'Authorization': 'Client-ID ' + apiKey
    }
  }).then ((res) => {
    return res.json();
  }).then ((data) => {
    console.log(data);
  })
}

// create a new component
// component produces some html

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('robotics');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 300); 

    return (
      <div>
      < SearchBar onSearchTermChange={ videoSearch }/>
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