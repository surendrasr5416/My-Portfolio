import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';



import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main>
      <Outlet/>
    </main>
    <footer>

    </footer>
    </>
  )
}

export default App;