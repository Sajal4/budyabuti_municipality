import React from 'react'
import { Routes, Route } from "react-router-dom"
import Landingpage from './Landingpage'
import SignForm from './SignForm'
import Logform from './Logform'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/signup' element={<SignForm/>}/>
        <Route path='/login' element={<Logform/>}/>
    </Routes>
  )
}

export default Routing