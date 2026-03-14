import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <span className="footer-logo">WIKIGAMES</span>
                    <p className="footer-sub">Trabajo de Fin de Grado · 2025</p>
                </div>
                <div className="footer-links">
                    <Link to="/valorant">Valorant</Link>
                    <Link to="/marathon">Marathon</Link>
                    <a href="https://github.com/tu-repo" target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </div>
            <div className="footer-bottom">
                <span>Desarrollado con React · Express · Supabase · Drizzle</span>
            </div>
        </footer>
    )
}

export default Footer