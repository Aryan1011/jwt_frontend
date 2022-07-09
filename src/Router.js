import React, { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar"
import Register from "./components/auth/Register"
import Login from "./components/auth/login"
import Timeline from "./components/timeline/Timeline"
import HomePage from "./Pages/HomePage"
import ContactUs from "./Pages/ContactUs"
import ImpactUs from "./Pages/ImpactUs"
import AboutUs from "./Pages/AboutUs"
import Footer from "./components/layout/Footer"
import AuthContext from './context/AuthContext';
import './App.css';
function Router() {
    const { loggedIn } = useContext(AuthContext);
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                        <Route path="/aboutus" element={<AboutUs />} />
                        <Route path="/contactus" element={<ContactUs />} />
                        <Route path="/impactus" element={<ImpactUs />} />
                {
                    loggedIn === false && <>
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </>
                }
                {
                    loggedIn === true && 
                    <Route path="/timeline" element={<Timeline />} />
                }
            </Routes>
                <Footer/>
        </>
    )
}

export default Router;