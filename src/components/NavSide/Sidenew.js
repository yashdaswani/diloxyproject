import React from 'react'
import "./Side.css"

import { CalendarToday, ContactMail, DoubleArrow, Home, Info, LocalMall, Note, Person, PhonelinkRing, RateReviewSharp,Search } from '@material-ui/icons'
const Sidenew = () => {
  return (
    <div className='side'>
    <ul className='icons'>
        <li>
        <a href='/'>
              <Person/>
        </a>
        </li>
        <li>
        <a href='/'>
              <LocalMall/>
        </a>
        </li>
        <li>
        <a href='/'>
              <CalendarToday/>
        </a>
        </li>
        <li>
        <a href='/'>
              <PhonelinkRing/>
        </a>
        </li>
        <li>
        <a href='/'>
              <Note/>
        </a>
        </li>
        </ul>

        <div className='side_end'>
            
        
        <button
                className="menuBtn"
                // onClick={showSidebar}
                style={{ background: "white", border: "none" }}
              >
                <DoubleArrow/>


              </button>
              </div>
    </div>
  )
}

export default Sidenew
