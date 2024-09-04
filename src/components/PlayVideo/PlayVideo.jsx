import React, { useState, useEffect } from 'react';
import './PlayVideo.css';
import Like from '../../assets/Like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import { Api_Key } from '../../components/data';

function PlayVideo({ videoDetails }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // طلب للحصول على التعليقات
    fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoDetails.id}&key=${Api_Key}`)
      .then(response => response.json())
      .then(data => setComments(data.items))
      .catch(error => console.error('Error fetching comments:', error));
  }, [videoDetails.id]);

  return (
    <div className="play-video-container">
      <div className="video-wrapper">
        <iframe
          className="video-player"
          src={`https://www.youtube.com/embed/${videoDetails.id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={videoDetails.snippet.title}
        ></iframe>
      </div>
      <div className="video-info">
        <div className="video-title">{videoDetails.snippet.title}</div>
        <div className="video-stats">
          <span>{parseInt(videoDetails.statistics.viewCount).toLocaleString()} views</span> • <span>{new Date(videoDetails.snippet.publishedAt).toLocaleDateString()}</span>
        </div>
        <div className="video-actions">
          <img src={Like} alt="Like" className="action-icon" />
          <img src={dislike} alt="Dislike" className="action-icon" />
          <img src={share} alt="Share" className="action-icon" />
          <img src={save} alt="Save" className="action-icon" />
        </div>
      </div>
      <div className="channel-info">
        <img src={videoDetails.snippet.thumbnails.default.url} alt="Channel Logo" className="channel-logo" />
        <div className="channel-details">
          <div className="channel-name">{videoDetails.snippet.channelTitle}</div>
          <div className="channel-subscribers">
            {parseInt(videoDetails.statistics.subscriberCount).toLocaleString()} subscribers
          </div>
        </div>
        <button className="subscribe-button">Subscribe</button>
      </div>
      <div className="video-description">
        <p>{videoDetails.snippet.description}</p>
      </div>
      <div className="comments-section">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <div className="comment-user-info">
              <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="User Logo" className="comment-user-logo" />
              <div>
                <div className="comment-user-name">{comment.snippet.topLevelComment.snippet.authorDisplayName}</div>
                <div className="comment-date">{new Date(comment.snippet.topLevelComment.snippet.publishedAt).toLocaleDateString()}</div>
              </div>
            </div>
            <div className="comment-text">{comment.snippet.topLevelComment.snippet.textDisplay}</div>
            <div className="comment-actions">
              <img src={Like} alt="Like" className="comment-action-icon" />
              <img src={dislike} alt="Dislike" className="comment-action-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayVideo;
