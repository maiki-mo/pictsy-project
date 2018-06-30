import React from 'react';
import VideoListItem from './image_list_item';

const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    if (video != null) {
      // console.log(video.heroImage.link);
    return (
      <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={ video.id }
      video={ video } />
    )
    }
  })
  return (
  <div>
    <br />
    <ul className="col-md-4 list-group">
      { videoItems }
    </ul>
  </div>
  )
}

export default VideoList;