import * as React from 'react';
import './Home.css';
import video from '../../utils/content/video-3.mp4'

const Home = () => {
  return (
    <div className='main-container'>
      <YoutubeEmbed2 embedId="testi"/>
    </div>
  );
};

const YoutubeEmbed = ({embedId}: {embedId: string}) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

const YoutubeEmbed2 = ({embedId}: {embedId: string}) => (
  <div className="video-responsive">
    <video controls>
      <source src={video} type="video/mp4"/>
    </video>
  </div>
);

export default Home;
