import React from "react";

const Shimmer = () => {
  // Generate multiple shimmer cards
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-72 h-60 bg-gray-200 animate-pulse rounded-lg"
          >
            <div className="w-full h-40 bg-gray-300 rounded-t-lg"></div>
            <div className="p-2 space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
