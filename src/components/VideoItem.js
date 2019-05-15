import React from 'react';


const VideoItem = ({video, onVideoSelect}) => {
  return (
    <div
      className="list-group-item d-flex align-items-center"
      onClick={()=> onVideoSelect(video)}
    >
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} style={{width: '200px'}}/>
      <div className="font-weight-bold ml-3">{video.snippet.title}</div>
    </div>
  );
};

export default VideoItem;
