import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'  
import { ClientScreen } from './ScreenComponents/ClientScreen'

function App() {

  
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<ClientScreen/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
