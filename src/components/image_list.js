import React from 'react';
import ImageListItem from './image_list_item';

const ImageList = (props) => {
  const imageItems = props.images.map((image) => {
    if (image != null) {

    // creates a new list-item by looping through images array
    return (
      <ImageListItem
      onImageSelect={props.onImageSelect}
      key={ image.id }
      image={ image }
      />
    )
    }
  })
  return (
  <div id="img-container">
    <br />
    <ul className="img-list">
      { imageItems }
    </ul>
  </div>
  )
}

export default ImageList;