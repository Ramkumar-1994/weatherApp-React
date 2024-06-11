import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './Pages/About';
import Requests from './Pages/Requests';
import Userdetails from './Pages/Userdetails';
 
const App = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/requests' element={<Requests/>}/>
        <Route path='/:username' element={<Userdetails/>}/>
      </Routes>
    </>
  )
}

export default App
