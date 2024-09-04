import React, { useState, useEffect } from 'react';
import './Feed.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Api_Key} from '../data'

function Feed({ category }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${category}&maxResults=8&key=${Api_Key}`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [category]);

  return (
    <div className="feed">
      {videos.map((video) => (
        <Link to={`/video/${category}/${video.id.videoId}`} className="card" key={video.id.videoId}>
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
          <h1>{video.snippet.title}</h1>
          <h3>{video.snippet.channelTitle}</h3>
          <p>{new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
        </Link>
      ))}
    </div>
  );
}

export default Feed;