import React from 'react';

let removeComments = (e) => {
  let wipe = document.querySelector('.comment-section');
  wipe.innerHTML = '';
  console.log(wipe);
}

const VideoListItem = ({ video, onVideoSelect }) => {
  let imgUrl = video.images[0].link;

  return (
    <li className="img-list-li" onClick={ () => onVideoSelect(video) } >
        <a href="#img-title"><img onClick={ removeComments } className="list-img" src={ imgUrl } ></img></a>
    </li>
  )
};

export default VideoListItem;