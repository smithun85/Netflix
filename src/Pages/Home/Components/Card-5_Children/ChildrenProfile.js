
import React from 'react'

import child from '../../../../Assets/children.png'

function ChildrenProfile() {
  return (
    <>
        <div className="section">
        <div className="info-row">

          <div className="section-column">
            <div className="column-content ">
              <img src={child} alt="" />
            </div>
          </div>

          <div className="section-column">
            <div className='column-info column-info-right'>
              <h2>Create profiles for children.</h2>
              <h3>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
            </div>
          </div>
        </div>

      </div>
      <div className="border"></div>
      </>
  )
}

export default  ChildrenProfile