import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import apiKey from './../config/keys';
import _ from 'lodash';
import Fetch from 'whatwg-fetch';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      viralCheck: 0,
      sfwCheck: 0,
      animCheck: 0
    };

    this.imgSearch('cats');
  }

  imgSearch(term) {
    var rootUrl = 'https://api.imgur.com/3/gallery/t/';

    return fetch(rootUrl + term, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    }).then((res) => {
      return res.json();
    }).then ((data) => {
      // console.log(data.data.items);
      let newData = [];
      for (let img in data.data.items) {
        if (data.data.items[img].images) {
          if (data.data.items[img].images[0].type === 'image/jpeg' || data.data.items[img].images[0].type === 'image/gif' ) {
            newData.push(data.data.items[img]);
          }
        }
      }
      
      this.setState({
        videos: newData,
        selectedVideo: newData[0]
      })
      }
    )
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
          onVideoSelect={ selectedVideo => this.setState( { videos: this.state.videos, selectedVideo: selectedVideo } )}
          videos={ this.state.videos } />
      </div>
    );
   }
};

// make sure it finds its way into the dom

ReactDOM.render(<App />, document.querySelector('.container'));