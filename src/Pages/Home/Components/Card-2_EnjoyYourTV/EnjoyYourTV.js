import React from 'react'
import video1 from '../../../../Assets/video1.mp4';
import tv from '../../../../Assets/tv.png'


function EnjoyYourTV() {
  return (
    <>

      <div className="section">
        <div className="info-row">
          <div className="section-column">
            <div className='column-info'>
              <h2>Enjoy on your TV.</h2>
              <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
            </div>
          </div>

          <div className="section-column">
            <div className="column-content">
              <video src={video1} autoPlay loop muted />
              <img src={tv} alt="" />
              
              {/* or */}
              {/* <video autoPlay={true} muted={true} loop={true}>
          <source src={video} type='video/mp4' />
          </video> */}
            </div>
          </div>
        </div>

      </div>
      <div className="border"></div>
    </>

  )
}

export default EnjoyYourTV