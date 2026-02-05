import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import Heroc from './components/heroc/heroc.jsx'
import Card from './components/card/card.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="hero-section">
        <Heroc />
        <div className="card-section">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}

export default App