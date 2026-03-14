import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const location = useLocation()
    const [open, setOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">WIKIGAMES</Link>
            </div>

            <button className="navbar-hamburger" onClick={() => setOpen(!open)}>
                <span />
                <span />
                <span />
            </button>

            <ul className={`navbar-links ${open ? 'open' : ''}`}>
                <li>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setOpen(false)}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/valorant" className={location.pathname.startsWith('/valorant') ? 'active' : ''} onClick={() => setOpen(false)}>
                        Valorant
                    </Link>
                </li>
                <li>
                    <Link to="/marathon" className={location.pathname.startsWith('/marathon') ? 'active' : ''} onClick={() => setOpen(false)}>
                        Marathon
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar