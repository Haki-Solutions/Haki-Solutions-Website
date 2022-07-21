import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Contacts from './Components/Contacts/Contacts'
import Services from './Components/Services/Services'
const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/contacts' element={<Contacts></Contacts>}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter