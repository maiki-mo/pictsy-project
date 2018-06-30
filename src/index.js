import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/image_list';
import VideoDetail from './components/image_detail';
import Checkboxes from './components/checkboxes';
import apiKey from './../config/keys';
import _ from 'lodash';
import Fetch from 'whatwg-fetch';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      typVideos: [],
      selectedVideo: null,
      checkBoxes: {
        viral: true,
        animated: true
      }
    };

    this.changeBox = this.changeBox.bind(this)
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
        typVideos: newData,
        selectedVideo: newData[0]
      })
      }
    )
  }

  // method used for handle checkbox events & filtering displayed videos
  changeBox(e) {
    // changes the current values of the checkBox states to either true || false for filtering
    let originState = this.state.typVideos;
    let name = e.target.name;
    let value = this.state.checkBoxes[name]
    this.state.checkBoxes[name] = !value;
    let videos = this.state.videos;
    let filtVids = []
    // loop through videos array and check for filters
    videos.forEach((vid) => {
      if (value === true && name === 'animated' && vid.images[0].type === 'image/gif') {
        filtVids.push(vid);
      } else if (value === true && name === 'viral' && vid.in_most_viral === true) {
        filtVids.push(vid);
      } else if (value === false) {
        filtVids = originState
      }
    })
    //sets the state based on above conditions
    this.setState({
      videos: filtVids
    })
  }

    // renders components to the DOM
  render() {
    // limits time between state changes with search
    const imgSearch = _.debounce((term) => {
      this.imgSearch(term)
    }, 300); 

    return (
      <div>
        < SearchBar onSearchTermChange={ imgSearch }/>
        < VideoDetail video={ this.state.selectedVideo }/>
        < Checkboxes 
          changeBox= { this.changeBox }
          imgDisplayState= { this.state }
        />
        < VideoList 
          onVideoSelect={ selectedVideo => this.setState( { videos: this.state.videos, selectedVideo: selectedVideo } )}
          videos={ this.state.videos } 
          filters={ this.state.checkBoxes }
        />
      </div>
    );
   }
};

ReactDOM.render(<App />, document.querySelector('.container'));