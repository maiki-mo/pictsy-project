import React from 'react';
import VideoListItem from './image_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    if (video != null) {
    return (
      <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={ video.id }
      video={ video }
      />
    )
    }
  })
  return (
  <div>
    <br />
    <ul className="img-list">
      { videoItems }
    </ul>
  </div>
  )
}

export default VideoList;