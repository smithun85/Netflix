import React from 'react';
import { AiOutlineGlobal } from 'react-icons/ai'

import netflix from '../../../../Assets/netflix.png';


import { Link } from 'react-router-dom'
import './Navbar.css';


function Navbar() {
    return (
        <nav>
            <div className='logo'>
                <img src={netflix} alt="" />
            </div>

            <div className='menu' >

                <div className="language">
                    <AiOutlineGlobal color='white' />
                    <select >
                        <option value="English"> English</option>
                        <option lang='hi' value="Hindi" data-language='hi' data-country='IN'>Hindi</option>
                    </select>
                </div>
                <div className="login_CSS">
                    <Link to='/login'>Sign in</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar