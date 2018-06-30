import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  let imgUrl = video.images[0].link;

  return (
    <li style={{ display: 'inline-block', margin: '20px 20px 20px' }} onClick={ () => onVideoSelect(video) } className="list-group-item">
        <div>
            <div>
              <h2>{ video.description }</h2>
            </div>
          </div>
        <div>
        <div>
        <img style={{width: '200px'}} src={ imgUrl } ></img>
        </div>
      </div>
    </li>
  )
};

export default VideoListItem;