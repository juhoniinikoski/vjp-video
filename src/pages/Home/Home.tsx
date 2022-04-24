import * as React from 'react';
import './Home.css';
import video from '../../utils/content/VJPvideo.mp4'
import thumbnail from '../../utils/content/thumbnail.png'

const Home = () => {
  return (
    <div className='main-container'>
      <Embed/>
    </div>
  );
};

const Embed = () => (
  <div className="video-responsive">
    <video controls poster={thumbnail}>
      <source src={video} type="video/mp4"/>
    </video>
  </div>
);

export default Home;
