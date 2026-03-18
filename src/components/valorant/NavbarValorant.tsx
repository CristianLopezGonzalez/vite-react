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
            <div className="v-nav-status">
                <span className="v-nav-id">// VALORANT_OS_v1.2.0</span>
                <div className="v-nav-connection">
                    <span className="v-conn-dot" />
                    <span className="v-conn-label">UPLINK_STABLE</span>
                </div>
            </div>

            <ul className="navbar-valorant-links">
                {links.map((l, index) => (
                    <li key={l.path}>
                        <Link
                            to={l.path}
                            className={location.pathname === l.path ? 'active' : ''}
                        >
                            <span className="v-link-num">// 0{index}</span> {l.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="v-nav-branding">
                <Link to="/" className="v-back-portal">PORTAL_EXIT ↗</Link>
            </div>
        </nav>
    )
}

export default NavbarValorant