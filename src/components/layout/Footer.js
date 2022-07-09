import React from 'react'
import footerLogo from '../../assets/images/mitraWhiteLogo.png'
import { FaPhoneAlt, FaEnvelope, FaInstagramSquare, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
function Footer() {
    return (
        <>
        <div style={{backgroundColor:'#40506A'}}>
            <div className='footer' >
                <div className="footerLogo">
                    <img src={footerLogo} alt="" />
                    <p>Sector 25, Chandigarh</p>
                </div>
                <div className="footerContact">
                    <div className='footerLi'>
                        <p className='footerHeading'>Contact Us</p>
                    </div>
                    <div className='liContact2'>
                        <div className='footerContactLiIcon'>
                            <FaPhoneAlt color='#fff' />
                        </div>
                        <div>
                            <p>+91-8968564546</p>
                        </div>
                    </div>
                    <div className='liContact'>
                        <div className='footerContactLiIcon'>
                            <FaEnvelope color='#fff' />
                        </div>
                        <div>
                            <p>mitrauietpu@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="footerHandles">
                    <div>
                        <p className='footerHeading'>Socials</p>
                    </div>
                    <div className='socialIcons'>
                        <FaInstagramSquare color='#fff' size={30} />
                        <FaLinkedinIn color='#fff' size={30} style={{margin:' 0 1.3rem'}} />
                        <FaFacebookF color='#fff' size={30} />
                    </div>

                </div>
            </div>
            <div className='footerLine'>

            </div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center',color:'white'}}>
                <p>2022 &copy; All rights reserved.</p>
            </div>
        </div>
        </>
    )
}

export default Footer