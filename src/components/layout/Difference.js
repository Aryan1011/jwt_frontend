import React from 'react'
import diff from '../../assets/images/diffImage.png'
import {Link} from 'react-router-dom'

function Difference() {
  return (
    <>

    <div>
    <div className='diffContentOuter'>
        <p className='diffContent'>MAKE A DIFFERENCE</p>
    </div>
    </div>
    
    <div className='diffMain'>
    <div className='diffImage'>
      <img src={diff} alt="" />
    </div>
    <div className="diffPitch">
      <div className='pitchContent'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad tenetur vitae vel! Odit maxime perspiciatis harum? Quas pariatur iste nemo minima ad, neque, expedita numquam qui repudiandae deleniti architecto maxime nisi incidunt.</p>
      </div>
      <div className="donateButton">
        <Link to="/donate">
        <button>Donate Now!!</button>
        </Link>
      </div>
    </div>
    </div>
    </>
  )
}

export default Difference