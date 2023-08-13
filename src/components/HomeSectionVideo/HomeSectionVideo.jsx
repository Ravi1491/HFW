import './HomeSectionVideo.css';
import iron from '../../assets/mainVideo.mp4';
import React, { useEffect, useRef } from 'react';

export default function HomeSectionVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultPlaybackRate = 0.5;
      videoRef.current.load();
    }
  }, []);

  return (
    <div className="video-container">
      <video className="video-background" autoPlay muted loop ref={videoRef}>
        <source src={iron} type="video/mp4" />
      </video>
      <div className="overlay">
        <div className="overlay-content">
          <h1 className='overlay-content-h1'>We Do Laundry With Love, Care And Professionalism</h1>
          <h5 className='overlay-content-h5'>Book Laundry Slot Now</h5>
          {/* <h5></h5> */}
          <button className="demo-button">
            Download App
          </button>
        </div>
      </div>
    </div>
  );
}
