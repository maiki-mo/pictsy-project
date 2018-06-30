import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  let imgUrl = video.images[0].link;

  return (
    <li className="img-list-li" onClick={ () => onVideoSelect(video) } >
        <img className="list-img" src={ imgUrl } ></img>
    </li>
  )
};

export default VideoListItem;