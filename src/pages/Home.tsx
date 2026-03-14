import './Home.css'
import { SiReact, SiTypescript, SiExpress, SiSupabase, SiVercel } from 'react-icons/si'
import { TbDatabase } from 'react-icons/tb'

const techs = [
    { name: 'React', desc: 'Frontend SPA', icon: <SiReact /> },
    { name: 'TypeScript', desc: 'Tipado estático', icon: <SiTypescript /> },
    { name: 'Express', desc: 'API REST', icon: <SiExpress /> },
    { name: 'Drizzle', desc: 'ORM', icon: <TbDatabase /> },
    { name: 'Supabase', desc: 'Base de datos & Storage', icon: <SiSupabase /> },
    { name: 'Vercel', desc: 'Deploy', icon: <SiVercel /> },
]

const links = [
    { label: 'Repositorio Backend', url: 'https://github.com/tu-usuario/wikigames-api' },
    { label: 'Repositorio Frontend', url: 'https://github.com/tu-usuario/wikigames-web' },
    { label: 'Web en producción', url: 'https://wikigames.vercel.app' },
]

const Home = () => {
    return (
        <main className="home">
            <section className="home-hero">
                <div className="home-hero-tag">Trabajo de Fin de Grado · 2025</div>
                <h1 className="home-title">
                    Videogame<br />
                    <span className="home-title-outline">Wiki & Database</span>
                </h1>
                <p className="home-desc">
                    Plataforma web que centraliza información detallada sobre videojuegos,
                    incluyendo personajes, armas, mapas y estadísticas. Construida con una
                    API REST propia, base de datos relacional y un frontend moderno.
                </p>
            </section>

            <section className="home-section">
                <h2 className="home-section-title">Tecnologías</h2>
                <div className="home-tech-grid">
                    {techs.map((t) => (
                        <div className="home-tech-card" key={t.name}>
                            <span className="home-tech-icon">{t.icon}</span>
                            <span className="home-tech-name">{t.name}</span>
                            <span className="home-tech-desc">{t.desc}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="home-section">
                <h2 className="home-section-title">Links</h2>
                <div className="home-links-grid">
                    {links.map((l) => (
                        <a
                        className="home-link-card"
                        key={l.label}
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        >
                        <span className="home-link-label">{l.label}</span>
                        <span className="home-link-arrow">↗</span>
                        </a>
                        ))}
                </div>
            </section>
        </main>
    )
}

export default Home