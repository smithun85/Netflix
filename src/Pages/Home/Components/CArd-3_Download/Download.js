import React from 'react'

import image from '../../../../Assets/sec3.jpg'
import boxshot from '../../../../Assets/boxshot.png';
import downloadIcon from '../../../../Assets/download-icon.gif'



function Download() {
  return (
    <>
      <div className="section sectionDownload">
        <div className="info-row">

          <div className="section-column">
            <div className="column-content ">
              <img src={image} alt="" />
              <div className='download-icon-box'>
                <img src={boxshot} alt="" />
                <span>
                  <h4>Stranger Things</h4>
                  <h5>Downloading...</h5>
                </span>
                <img src={downloadIcon} alt="" />
              </div>
            </div>

          </div>

          <div className="section-column">
            <div className='column-info column-info-right'>
              <h2>Download your shows to watch offline.</h2>
              <h3>Save your favourites easily and always have something to watch.</h3>
            </div>
          </div>
        </div>

      </div>
      <div className="border"></div>
    </>
  )
}

export default Download