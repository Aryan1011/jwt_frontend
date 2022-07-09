import React from 'react'
import mission from '../../assets/images/mission.png'
import values from '../../assets/images/values.png'
import vision from '../../assets/images/vision.png'

function Mission() {
  return (
    <div>
    <div className='missionContentOuter'>
         <p className='missionContent'>MITRA- touching lives</p>
    </div>
      <div className="missionContainer">
        <div className="missionBox">
          <div className='missionBox1'>
            <img src={mission} alt="" />
          </div>
          <div className='missionBox2'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga repellat cupiditate ad id, consequatur ut unde reiciendis aliquid voluptatum sunt corrupti rem ea tempora officia placeat omnis vero qui dolores dolore debitis!</p>
          </div>
        </div>

        <div className="missionBox">
          <div className='missionBox2'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga repellat cupiditate ad id, consequatur ut unde reiciendis aliquid voluptatum sunt corrupti rem ea tempora officia placeat omnis vero qui dolores dolore debitis!</p>
          </div>
          <div className='missionBox1'>
            <img src={vision} alt="" />
          </div>
        </div>

        <div className="missionBox">
          <div className='missionBox1'>
            <img src={values} alt="" />
          </div>
          <div className='missionBox2'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga repellat cupiditate ad id, consequatur ut unde reiciendis aliquid voluptatum sunt corrupti rem ea tempora officia placeat omnis vero qui dolores dolore debitis!</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Mission