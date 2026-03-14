import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const location = useLocation()

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">WIKIGAMES</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/valorant" className={location.pathname.startsWith('/valorant') ? 'active' : ''}>
                        Valorant
                    </Link>
                </li>
                <li>
                    <Link to="/marathon" className={location.pathname.startsWith('/marathon') ? 'active' : ''}>
                        Marathon
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar