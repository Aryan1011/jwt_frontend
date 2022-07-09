import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import AuthContext from '../../context/AuthContext';
import LogOutBtn from "../auth/LogOutBtn"
import logo from '../../assets/images/mitraBlackLogo.png';
function Navbar() {

    const { loggedIn } = useContext(AuthContext);
    console.log(loggedIn);
    return (
        <>
<div className='navbarTopBox'>
        </div>
        <div className='navbar'>

            <Link to="/">
            <div className='navbarLogo'>
                <img src={logo} alt="" />
            </div>
            </Link>

            <div className='navbarItems'>
                <ul >
                <Link to="/about"> 
                  <li>About Us</li>
                  </Link>
                  <Link to="/contact"> 
                  <li>Contact Us</li>
                  </Link>

                  <Link to="/impact"> 
                  <li>Impact Us</li>
                  </Link>
                </ul>
            </div>

            <div className='navbarButtons'>

            {
                loggedIn===false && (
                    <>
                        <Link to="/register">
                        <button >Register</button>
                        </Link>
                        <Link to="/login">
                        <button >Login</button>
                        </Link>
                    </>
                )
            }

            {
                loggedIn===true && (
                    <>
                        <Link to="/timeline">
                        <button >Timeline</button>
                        </Link>
                        <LogOutBtn/>
                    </>
                )
            }
            </div>
        </div>
        </>
    )
}

export default Navbar