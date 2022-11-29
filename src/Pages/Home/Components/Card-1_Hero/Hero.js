import React from 'react'
import herosection from '../../../../Assets/herosection.jpg';
import '../HomeStyle.css';
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='hero'>
      <img src={herosection} alt="" />

      <div className="content">
        <h1><span>Unlimited movies, TV</span> <span>shows and more.</span></h1>

        <h3>Watch anywhere. Cancel anytime.</h3>

        <form action="" className='email'>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>

         <div>
         <input type="email" placeholder='Email address' />
          <button>Get Started &nbsp; &gt; </button>
         </div>
        </form>
      </div>
      <div className="border"></div>
    </div>
  )
}

export default Hero