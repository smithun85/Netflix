import React from 'react'
import video2 from '../../../../Assets/video2.mp4';
import image from '../../../../Assets/device.png'
function WatchEverywhere() {
  return (
      <>
        <div className="section">
        <div className="info-row">
          <div className="section-column">
            <div className='column-info'>
              <h2>Watch everywhere.</h2>
              <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
            </div>
          </div>

          <div className="section-column">
            <div className="column-content video2">
              <video src={video2} autoPlay loop muted />
              <img src={image} alt="" />
            </div>
          </div>
        </div>

      </div>
      <div className="border"></div>
      </>
  )
}

export default WatchEverywhere