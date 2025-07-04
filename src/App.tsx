import { useState, useEffect } from 'react';
import './App.css';

const YOUTUBE_PLAYLIST_ID = 'PL6TYbnB3Rppq9Zi_t-36-Po_hjxaY1F_R';
const PATREON_URL = 'https://patreon.com/sum1namedjon?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink';
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

interface Video {
  id: string;
  thumbnail: string;
  title: string;
}

function App() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [featuredVideoIndex, setFeaturedVideoIndex] = useState(0);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${YOUTUBE_PLAYLIST_ID}&key=${API_KEY}&maxResults=50`);
        if (!response.ok) {
          throw new Error('Failed to fetch videos from YouTube API');
        }
        const data = await response.json();
        const videoItems = data.items.map((item: any) => ({
          id: item.snippet.resourceId.videoId,
          thumbnail: item.snippet.thumbnails.high.url, // Fetch high resolution thumbnails
          title: item.snippet.title,
        }));
        setVideos(videoItems);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    if (API_KEY) {
      fetchVideos();
    } else {
      console.error("YouTube API key is not set. Please set VITE_YOUTUBE_API_KEY environment variable.")
    }
  }, []);

  useEffect(() => {
    if (videos.length > 0) {
      const timer = setTimeout(() => {
        setFeaturedVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [featuredVideoIndex, videos.length]);

  const openModal = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sum1SoulSolutions</h1>
        <p>Perspective is Reality</p>
      </header>
      <main>
        {videos.length > 0 && (
          <div className="featured-video">
            <h2>Featured Video</h2>
            <div className="video-card" onClick={() => openModal(videos[featuredVideoIndex])}>
              <img src={videos[featuredVideoIndex].thumbnail} alt={videos[featuredVideoIndex].title} />
              <h3>{videos[featuredVideoIndex].title}</h3>
            </div>
          </div>
        )}
        <div className="video-gallery">
          {videos.map((video) => (
            <div key={video.id} className="video-thumbnail" onClick={() => openModal(video)}>
              <img src={video.thumbnail} alt={video.title} />
              <p>{video.title}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className="App-footer">
        <a
          className="App-link"
          href={PATREON_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Support me on Patreon
        </a>
      </footer>
      {selectedVideo && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>X</button>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

