import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  let imgUrl = '';
  if (!video.images) {
    imgUrl = video.link;
  } else {
    imgUrl = video.images[0].link
  }

  return (
    <li style={{ display: 'inline-block', margin: '20px 20px 20px' }} onClick={ () => onVideoSelect(video) } className="list-group-item">
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