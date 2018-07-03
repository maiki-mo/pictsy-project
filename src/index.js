import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import ImageList from './components/image_list';
import ImageDetail from './components/image_detail';
import Checkboxes from './components/checkboxes';
import _ from 'lodash';
import Fetch from 'whatwg-fetch';

class App extends Component {
  constructor(props) {
    super(props);
    // setting the initial state
    this.state = {
      images: [],
      typImages: [],
      selectedImage: null,
      checkBoxes: {
        viral: true,
        animated: true
      }
    };
    //bind allows us to refer to the below changeBox method
    this.changeBox = this.changeBox.bind(this)
    // initial search term is 'cats', because everyone looks up cats
    this.imgSearch('cats');
  }

  //imgSearch gets called when the searchbar's 'term' is changed

  imgSearch(term) {
    var rootUrl = 'https://api.imgur.com/3/gallery/t/';
    // fetches metadata from api with an API header
    return fetch(rootUrl + term, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    }).then((res) => {
    // fetch responds and we turn it into json data
      return res.json();
    }).then ((data) => {
    // now the data is manageable 
      let newData = [];
      for (let img in data.data.items) {
        if (data.data.items[img].images) {
          if (data.data.items[img].images[0].type === 'image/jpeg' || data.data.items[img].images[0].type === 'image/gif' ) {
            newData.push(data.data.items[img]);
          }
        }
      }
    // state is set with an array of objects
      this.setState({
        images: newData,
        typImages: newData,
        selectedImage: newData[0]
      })
      }
    )
  }

  // method used for handle checkbox events & filtering displayed images
  changeBox(e) {
    // changes the current values of the checkBox states to either true || false for filtering
    let originState = this.state.typImages;
    let name = e.target.name;
    let value = this.state.checkBoxes[name]
    this.state.checkBoxes[name] = !value;
    let images = this.state.images;
    let filtImgs = []
    // loop through images array and check for filters
    images.forEach((img) => {
      if (value === true && name === 'animated' && img.images[0].type === 'image/gif') {
        filtImgs.push(img);
      } else if (value === true && name === 'viral' && img.in_most_viral === true) {
        filtImgs.push(img);
      } else if (value === false) {
        filtImgs = originState
      }
    })

    //checks for a possible lack of videos in filter

    if (filtImgs.length < 1) {
      alert('No images returned for this filter')
      filtImgs = originState;
      this.setState({
        checkBoxes: {
          viral: true,
          animated: true
        }
      })
    }

    //sets the state based on above conditions
    this.setState({
      images: filtImgs
    })
  }

    // renders components to the DOM
  render() {
    // uses lodash to limit time between state changes with search (otherwise state would update with each keystroke)
    const imgSearch = _.debounce((term) => {
      this.imgSearch(term)
    }, 300); 

    return (
      <section>
        <header>
          <h1>Pictsy</h1>
          < SearchBar onSearchTermChange={ imgSearch }/>
        </header>
        <main>
          <section id="hero-img">
          < ImageDetail image={ this.state.selectedImage }/>
          </section>
        <aside>
          < Checkboxes 
            changeBox= { this.changeBox }
            imgDisplayState= { this.state }
          />
          < ImageList 
            onImageSelect={ selectedImage => this.setState( { images: this.state.images, selectedImage: selectedImage } )}
            images={ this.state.images } 
            filters={ this.state.checkBoxes }
          />
        </aside>
        </main>
      </section>
    );
   }
};

ReactDOM.render(<App />, document.querySelector('.container'));