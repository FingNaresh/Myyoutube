 export const GOOGLE_API_KEY="AIzaSyBB6WGYfVzWZq8HCXEqpcVYMcndHBrQ3s0";

export const OFFSET_LIVE_CHAT = 25;

export const YOUTUBE_VIDEO_API = 
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+
    GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
"https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_GET_VIDEO_BY_ID = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";



// const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

// export const YOUTUBE_VIDEO_API = 
//   `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;
