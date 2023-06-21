import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'
import Addpro from '../Components/Addpro'
import Service from '../Components/Service'
import Contact from '../Components/Contact'
// import Home from "../Components/Home.jsx";

const Navigate = () => {
  return (
    <div>
      <Routes>
        {/* <Route path='/'  element={<Home/>}></Route> */}
        <Route path='/dashboard'  element={<Dashboard/>} ></Route>
        <Route path='/addpro' element={<Addpro/>}> </Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default Navigate
