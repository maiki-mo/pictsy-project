import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }

  const videoId = video.id;
  const url = video.heroImage.link
  
  return (
    <div id="selected-img" className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <img id="img-display" className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>{ video.name }</div>
        <div>{ video.description }</div>
      </div>
    </div>
  )
};

export default VideoDetail;