import { useState } from 'react'

import './App.css'
import Footer from './Components/Footer'
import Movies from './Components/Movies'
import NavBar from './Components/NavBar'
import Display from './Components/Display'

function App() {
 

  return (
    <>
      

      <div>
        <NavBar/>
        <Display/>
       <Movies/>
       <Footer/>
      </div>
    </>
  )
}

export default App
