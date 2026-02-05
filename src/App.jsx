import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import Heroc from './components/heroc/heroc.jsx'
import Card from './components/card/card.jsx'
import cardARR from './carddata/carddata.jsx'

const App = () => {


  return (
    <>
      <Navbar />
      <div className="hero-section">
        <Heroc />
        <div className="card-section">
          {cardARR.map((card) => (
            <Card {...card} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App