import React from 'react';
import './Recommended.css';
import { Link } from 'react-router-dom';

function Recommended({ videos }) {
  return (
    <div className="Recommended-container">
      <h2>Recommended</h2>
      <div className="recommended-videos">
        {videos.length > 0 ? (
          videos.map(video => (
            <Link to={`/video/Recommended/${video.id.videoId}`} key={video.id.videoId} className="recommended-video">
              <img 
                src={video.snippet.thumbnails.medium.url} 
                alt={`${video.snippet.title} Thumbnail`} 
                className="recommended-thumbnail" 
              />
              <div className="video-info">
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.channelTitle}</p>
                <p>{new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No recommended videos available.</p>
        )}
      </div>
    </div>
  );
}

export default Recommended;
