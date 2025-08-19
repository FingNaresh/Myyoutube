import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { YOUTUBE_GET_VIDEO_BY_ID, GOOGLE_API_KEY } from "../utils/constant";

// Helper to format numbers like YouTube (1.2K, 3.4M)
const formatCount = (num) => {
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
  return num;
};

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  const [videoDetails, setVideoDetails] = useState(null);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await fetch(
          `${YOUTUBE_GET_VIDEO_BY_ID}${videoId}&key=${GOOGLE_API_KEY}`
        );
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setVideoDetails(data.items[0]);
        }
      } catch (error) {
        console.error("Failed to fetch video details:", error);
      }
    };

    if (videoId) fetchVideoDetails();
  }, [videoId]);

  if (!videoDetails) return <div className="p-5">Loading...</div>;

  const { snippet, statistics } = videoDetails;
  const { title, channelTitle, description, publishedAt } = snippet;
  const { likeCount, viewCount } = statistics;

  const toggleLike = () => {
    setLiked(!liked);
    if (disliked && !liked) setDisliked(false);
  };

  const toggleDislike = () => {
    setDisliked(!disliked);
    if (liked && !disliked) setLiked(false);
  };

  const toggleSubscribe = () => setSubscribed(!subscribed);

  return (
    <div className="flex flex-col w-full">
      {/* Video + Live Chat */}
      <div className="px-5 flex flex-col lg:flex-row w-full gap-4">
        {/* Video Player */}
        <div className="flex-shrink-0 w-full lg:w-2/3">
          <iframe
            width="100%"
            height="450"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>

          {/* Video Info */}
          <div className="mt-4">
            <h1 className="text-xl font-bold">{title}</h1>

            {/* Channel Row */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-3">
                {/* Channel Avatar */}
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                  {channelTitle[0]}
                </div>
                <div>
                  <p className="text-gray-600 font-medium flex items-center gap-1">
                    {channelTitle}
                    <span className="bg-gray-200 text-gray-700 text-xs px-1 rounded">✔</span>
                  </p>
                  <p className="text-gray-500 text-sm">301M subscribers</p>
                </div>
              </div>
              <button
                onClick={toggleSubscribe}
                className={`px-4 py-1 rounded ${
                  subscribed
                    ? "bg-gray-400 text-white"
                    : "bg-red-500 text-white hover:bg-red-600"
                }`}
              >
                {subscribed ? "Subscribed" : "Subscribe"}
              </button>
            </div>

            {/* Action Buttons Row */}
            <div className="flex items-center gap-4 mt-3">
              <button
                onClick={toggleLike}
                className={`px-3 py-1 rounded ${
                  liked ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                👍 {formatCount(Number(likeCount) + (liked ? 1 : 0))}
              </button>
              <button
                onClick={toggleDislike}
                className={`px-3 py-1 rounded ${
                  disliked ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                👎
              </button>
              <button className="px-4 py-1 bg-gray-200 rounded hover:bg-gray-300">
                Share
              </button>
              <button className="px-4 py-1 bg-gray-200 rounded hover:bg-gray-300">
                Download
              </button>
              <button className="px-4 py-1 bg-gray-200 rounded hover:bg-gray-300">
                ...
              </button>
            </div>

            {/* Views & Published Date */}
            <p className="text-gray-500 text-sm mt-2">
              {formatCount(Number(viewCount))} views • {new Date(publishedAt).toLocaleDateString()}
            </p>

            {/* Description */}
            <div className="mt-2 text-gray-700">
              {showFullDesc ? description : description?.substring(0, 200) + "..."}
              {description?.length > 200 && (
                <button
                  onClick={() => setShowFullDesc(!showFullDesc)}
                  className="ml-2 text-blue-500"
                >
                  {showFullDesc ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Live Chat */}
        <div className="w-full lg:w-1/3 border rounded-lg shadow-md">
          <LiveChat />
        </div>
      </div>

      {/* Comments */}
      <div className="mt-4 px-5">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
