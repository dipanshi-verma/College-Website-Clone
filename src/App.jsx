import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/AboutUs'
import Auth from './pages/LoginSignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Auth/>
      <Home/>
      <About/>
    </>
  )
}

export default App
