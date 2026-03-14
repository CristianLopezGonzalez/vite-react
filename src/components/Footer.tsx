import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <span className="footer-logo">WIKIGAMES</span>
                    <p className="footer-sub">Cristian Lopez Gonzalez · 2026</p>
                </div>
                <div className="footer-links">
                    <Link to="/valorant">Valorant</Link>
                    <Link to="/marathon">Marathon</Link>
                    <a href="https://github.com/CristianLopezGonzalez" target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </div>
            <div className="footer-bottom">
                <span>Desarrollado con React · Express · Supabase · Drizzle</span>
            </div>
        </footer>
    )
}

export default Footer