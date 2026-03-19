import { Link, useLocation } from 'react-router-dom'
import './NavbarMarathon.css'

const NavbarMarathon = () => {
    const location = useLocation()
    
    const links = [
        { label: 'Home', path: '/marathon' },
        { label: 'Runners', path: '/marathon/runners' },
        { label: 'Weapons', path: '/marathon/weapons' },
        { label: 'Factions', path: '/marathon/factions' },
    ]

    return (
        <>
            <div className="m-crt-overlay" />
            <nav className="m-navbar">
                <ul className="m-nav-links">
                {links.map((l, index) => (
                    <li key={l.path}>
                        <Link 
                            to={l.path} 
                            className={`m-nav-link ${location.pathname === l.path ? 'active' : ''}`}
                        >
                            <span className="m-link-num">// 0{index}</span> {l.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="m-nav-branding">
                <Link to="/" className="m-back-portal">PORTAL_EXIT ↗</Link>
            </div>
            </nav>
        </>
    )
}

export default NavbarMarathon
