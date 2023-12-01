import React from 'react'
import NavBar from './components/NavBar';
import PlayersList from './components/PlayersList';
import './App.css'

function App() {

  return (
    <>
      {/* Navbar component */}
      <NavBar />
      <div style={{ margin: 50 }}>
        {/* Player list component */}
        <PlayersList />
      </div>
    </>
  )
}

export default App
