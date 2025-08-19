import React from "react";
import { ViewConverter, timeAgo } from "../utils/math";

const VideoCard = ({ info }) => {
  const { snippet = {}, statistics = {} } = info || {};
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg rounded-lg hover:scale-105 transition-transform">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={thumbnails?.medium?.url || "https://via.placeholder.com/150"}
      />
      <ul>
        <li className="font-bold py-2 truncate">{title}</li>
        <li className="text-sm text-gray-700">{channelTitle}</li>
        <li className="text-sm text-gray-600">
          {ViewConverter(statistics?.viewCount)} views • {timeAgo(publishedAt)}
        </li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-2 m-2 border border-red-600 rounded-lg relative">
      <span className="absolute top-2 left-2 text-xs text-white bg-red-600 px-2 py-0.5 rounded">
        Ad
      </span>
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
