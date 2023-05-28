import React from 'react'
import "../allCss/NavbarItems.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function NavbarItems({type, datas}) {
  return (
    <div className='NavbarItems'>
        <div className="NavbarItemsleftDiv">
            {Object.entries(datas).map(([category, sports])=>(
                <div className="smallDiv" key={category}>
                    <ul>
                        {category}
                        {sports.map((item, index)=>(
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        
      </div>
      <div className="NavbarItemsrightDiv">
        <div className='NavbarItemsrightDivsmalltop'>

        </div>
        <div className='NavbarItemsrightDivsmallbottom'>
            <button className='NavbarItemsbutton'>DOWNLOAD NOW</button>
            <li><span>Clearance</span><FontAwesomeIcon icon={faArrowRight} /></li>
            <li><span>Best Seller of Decathlon Clone</span><FontAwesomeIcon icon={faArrowRight} /></li>
            <li><span>Made in India</span><FontAwesomeIcon icon={faArrowRight} /></li>
            <li><span>Eco Designed Products</span><FontAwesomeIcon icon={faArrowRight} /></li>
            <li><span>Decathlon Clone Store</span><FontAwesomeIcon icon={faArrowRight} /></li>
            <li><span>Decathlone Clone Blog</span><FontAwesomeIcon icon={faArrowRight} /></li>
            <li><span>Online Events</span><FontAwesomeIcon icon={faArrowRight} /></li>
            <li><span>Support</span><FontAwesomeIcon icon={faArrowRight} /></li>
            <li><span>Hppy Customer Milestones</span><FontAwesomeIcon icon={faArrowRight} /></li>
        </div>
      </div>
    </div>
  )
}

export default NavbarItems