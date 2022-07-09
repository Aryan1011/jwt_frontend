import React from 'react'
import communityImg from '../../assets/images/communityimg.png'
import fundImg from '../../assets/images/fundimg.png'
import clubImg from '../../assets/images/clubimg.png'

function Work() {
  return (
    <div>
    <div className='workContentOuter'>
        <p className='workContent'>OUR WORK</p>
    </div>
    
    <div className="workPost">
        <div className="workPostBox">
            <img src={communityImg} alt="" />
        </div>
        <div className="workPostBox">
            <img src={clubImg} alt="" />
        </div>
        <div className="workPostBox">
            <img src={fundImg} alt="" />
        </div>
    </div>


    </div>
  )
}

export default Work