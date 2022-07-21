import React from 'react'
import AppRouter from './AppRouter'
import Contacts from './Components/Contacts/Contacts'
import Description from './Components/Description/Description'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Services from './Components/Services/Services'

const App = () => {
  return (
    <div className='main'>
    <AppRouter></AppRouter>
    <Header></Header> 
    <Navbar></Navbar>
    <Description></Description>
    
    <Contacts></Contacts>
    <Footer></Footer>
    </div>
    
  )
}

export default App