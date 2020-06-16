import React from 'react';

const VideoDetail = ({video}) => {
  
  if(!video){
    return <div>Loading...</div>
  }
  const url = "https://www.youtube.com/embed/" + video.id.videoId;
  console.log(url);
  return (
    <div>
      <div className="ui embed">
      <iframe title="video player" width="560" height="315" src={url} ></iframe>
      </div>

      <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;