import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PlayVideo from '../../components/PlayVideo/PlayVideo';
import Recommended from '../../components/Recommended/Recommended'; // Import Recommended component
import { Api_Key } from '../../components/data';
import './video.css'

function Video() {
  const { videoId, category } = useParams(); // Add category to params
  const [videoDetails, setVideoDetails] = useState(null);
  const [recommendedVideos, setRecommendedVideos] = useState([]);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        // Fetch video details
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${Api_Key}`
        );
        setVideoDetails(response.data.items[0]);

        // Fetch recommended videos based on category
        const relatedResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${category}&maxResults=8&key=${Api_Key}`
        );
        setRecommendedVideos(relatedResponse.data.items);
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

    fetchVideoDetails();
  }, [videoId, category]);

  if (!videoDetails) return <div>Loading...</div>;

  return (
    <div className="play-container">
      <PlayVideo videoDetails={videoDetails} />
      <div className="recommended-section">
        <Recommended videos={recommendedVideos} />
      </div>
    </div>
  );
}

export default Video;
