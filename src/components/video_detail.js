import React from 'react';

const VideoDetail = ({ video }) => {
  console.log(video);
  if (!video) {
    return <div>No results...</div>
  }

  if (video.length < 5) {
    return <div>Not enough matches.  Try again.</div>
  }
  
  let imgUrl = video.images[0].link;
    return (
    <div id="selected-img">
      <div id="img-title">
        <h2>{ video.title }</h2>
      </div>
      <div className="embed-responsive embed-responsive-16by9">
        <img id="img-display" className="embed-responsive-item" src={ imgUrl } />
      </div>
    </div>
    )
};

export default VideoDetail;