import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      setLoading(true);
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      setVideos(json.items || []);
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Shimmer />;

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {/* First video as Ad */}
      {videos[0] && (
        <Link
          key={videos[0]?.id?.videoId || videos[0]?.id}
          to={"/watch?v=" + (videos[0]?.id?.videoId || videos[0]?.id)}
        >
          <AdVideoCard info={videos[0]} />
        </Link>
      )}

      {/* Render all videos */}
      {videos.map((video, index) => {
        if (index === 0) return null;

        const videoId = video?.id?.videoId || video?.id;

        return (
          <Link key={videoId} to={"/watch?v=" + videoId}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
