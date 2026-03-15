import {Link, useLocation} from 'react-router-dom'
import './NavbarValorant.css'

const NavbarValorant = () => {
    const location = useLocation()

    const links = [
        {label: 'Home', path: '/valorant'},
        {label: 'Agents', path: '/valorant/agents'},
        {label: 'Weapons', path: '/valorant/weapons'},
        {label: 'Maps', path: '/valorant/maps'},
        {label: 'Roles', path: '/valorant/roles'},
    ]

    return (
        <nav className="navbar-valorant">
            <ul className="navbar-valorant-links">
                {links.map((l) => (
                    <li key={l.path}>
                        <Link
                            to={l.path}
                            className={location.pathname === l.path ? 'active' : ''}
                        >
                            {l.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavbarValorant