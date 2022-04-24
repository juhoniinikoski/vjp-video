import * as React from 'react';
import './Home.css';
import video from '../../utils/content/VJPvideo.mp4'

const Home = () => {
  return (
    <div className='main-container'>
      <Embed/>
    </div>
  );
};

const Embed = () => (
  <div className="video-responsive">
    <video controls>
      <source src={video} type="video/mp4"/>
    </video>
  </div>
);

export default Home;
