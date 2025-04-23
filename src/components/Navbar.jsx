import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <div className="navbar-donut" style={{ marginLeft: 'auto' }}>
          <img src="/donut.png" className="donut-img" alt="donut" />
        </div>
      </div>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/p-tracker" className="navbar-link">P-Tracker</Link>
        <Link to="/memories" className="navbar-link">Memories</Link>
      </div>
    </nav>
  )
}

export default Navbar
