import React, { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar"
import Register from "./components/auth/Register"
import Login from "./components/auth/login"
import Timeline from "./components/timeline/Timeline"
import Home from "./components/layout/Home"
import AuthContext from './context/AuthContext';
function Router() {
    const { loggedIn } = useContext(AuthContext);
    return (
        <>
            <Navbar />
            <Routes>


                <Route exact path="/" element={<Home />} />

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

        </>
    )
}

export default Router;