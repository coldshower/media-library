import React from 'react';

export default ({ videos, onHandleSelectVideo, selectedVideo }) => {
  return (
    <div className="col-md-6">
      <h2> Videos </h2>
      <div className="select-video">
        <div id={selectedVideo.id}>
          <h6 className="title">{selectedVideo.description}</h6>
          <video controls src={selectedVideo.mediaUrl} alt={selectedVideo.title} />
        </div>

        <div className="video-thumbnail">
          {
            videos.map((video, i) => {
              return (
                <div key={i} onClick={onHandleSelectVideo.bind(this, video)}>
                  <video controls src={video.mediaUrl} alt={video.description} />
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}