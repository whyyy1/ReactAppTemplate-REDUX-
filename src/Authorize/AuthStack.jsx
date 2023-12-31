import React from 'react'
import Loading from '../pages/AuthPages/Loading'
import Login from '../pages/AuthPages/Login'
import Register from '../pages/AuthPages/Register'
import About from '../pages/AuthPages/About'
import { Routes, Route } from 'react-router-dom'
import AuthNavBar from '../Navigation/authNavBar'


function AuthStack() {
    return (
        <>
        <AuthNavBar/>
            <h1>AuthStack</h1>
            
            <Routes>
                <Route path="/loading" element={<Loading />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    )
}

export default AuthStack