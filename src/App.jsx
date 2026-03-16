import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Login from "./pages/Login";


function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App