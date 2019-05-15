import React from 'react';


const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <div className="embed-responsive embed-responsive-4by3 mb-2">
        <iframe className="embed-responsive-item" src={videosrc} frameBorder="0" title='video player'/>
      </div>
      <div className="card p-3">
        <div className="font-weight-bold mb-3">{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
