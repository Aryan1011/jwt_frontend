import React from 'react'
import qrcode from '../../assets/images/qrcode.png'
function Donate() {
  return (
    <div className="dabba" style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>
        <div className="qr" style={{width:'50%'}}>
            <img src={qrcode} alt=""  style={{width:'100%'}}/>
        </div>
        <div className="num" style={{width:'50%'}}>
                <div className="ones">
                    <h2> Paytm - XXXXXXXXXXX</h2>
                    <h2> Google Pay -  XXXXXXXXXXX</h2>
                </div>
        </div>
    </div>
  )
}

export default Donate