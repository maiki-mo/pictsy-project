import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  let imgUrl = video.images[0].link;

  return (
    <li className="img-list-li" onClick={ () => onVideoSelect(video) } >
        <a href="#img-title"><img className="list-img" src={ imgUrl } ></img></a>
    </li>
  )
};

export default VideoListItem;