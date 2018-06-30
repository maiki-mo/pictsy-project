import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imgUrl = video.heroImage.link;

  return (
    <li style={{ display: 'inline-block' }} onClick={ () => onVideoSelect(video) } className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
        <img style={{width: '200px'}} src={ imgUrl } ></img>
        </div>

        <div className="media-body">
          <div className="media-heading">
            { video.description }
          </div>
        </div>

      </div>
    </li>
  )
};

export default VideoListItem;