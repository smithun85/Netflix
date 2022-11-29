import React from 'react'
import { AiOutlineGlobal } from 'react-icons/ai'

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-lists">
          <ul>
            <li>Qestions? Call 000-800-040-1843</li>
          </ul>

          <div className="footer-list">

            <ul>
              <li>FAQ</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>Speed Test</li>
            </ul>

            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Performance</li>
              <li>Legal Notices</li>
            </ul>

            <ul>
              <li>Account</li>
              <li>Ways to Watch</li>
              <li>Corporate Information</li>
              <li>Only on Netflix</li>
            </ul>

            <ul>
              <li>Media Centre</li>
              <li>Terms of Use</li>
              <li>Contact Us</li>

            </ul>

          </div>

          <div className='menu' >

<div className="language">
    <AiOutlineGlobal color='#737373' />
    <select >
        <option value="English">English</option>
        <option lang='hi' value="Hindi" data-language='hi' data-country='IN'>Hindi</option>
    </select>
</div>
</div>



          <ul><li>Netflix India</li></ul>

        </div>

      </div>
    </>
  )
}

export default Footer