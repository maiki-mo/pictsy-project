import React from 'react';

let removeComments = (e) => {
  let wipe = document.querySelector('.comment-section');
  wipe.innerHTML = '';
  console.log(wipe);
}

const ImageListItem = ({ image, onImageSelect }) => {
  let imgUrl = image.images[0].link;

  return (
    <li className="img-list-li" onClick={ () => onImageSelect(image) } >
        <a href="#body"><img onClick={ removeComments } className="list-img" src={ imgUrl } ></img></a>
    </li>
  )
};

export default ImageListItem;