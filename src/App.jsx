import React from 'react'
import Navbar from './component/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Moviedetail from './pages/Moviedetail'
import Seatlayout from './pages/Seatlayout'
import MyBooking from './pages/MyBooking'
import Favorite from './pages/Favorite'
import {Toaster} from "react-hot-toast"
import Footer from './component/Footer'
import Layout from './pages/admin/Layout'

import Dashboard from './pages/admin/Dashboard'
import AddShows from './pages/admin/AddShows'
import ListShows from './pages/admin/ListShows'
import ListBooking from './pages/admin/ListBooking'
const App = () => {

  const isAdminroutes = useLocation().pathname.startsWith('/admin')

  return (
    <>
    <Toaster/>
    {!isAdminroutes && <Navbar/>}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path="/movies/:id" element={<Moviedetail />} />
      <Route path='/movies/:id/:date' element={<Seatlayout/>}/>
      <Route path='/MyBooking' element={<MyBooking/>}/>
      <Route path='/Favorite' element={<Favorite/>}/>
      <Route path='/admin/*' element={<Layout/>} >
        <Route index element={<Dashboard/>}/>
        <Route path='add-shows' element={<AddShows/>}/>
        <Route path='List-shows' element={<ListShows/>}/>
        <Route path='List-Booking' element={<ListBooking/>}/>
      </Route>
    </Routes>
     {!isAdminroutes && <Footer/>}
    </>
  )
}

export default App