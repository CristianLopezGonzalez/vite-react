import './Home.css'
import { SiReact, SiTypescript, SiExpress, SiSupabase, SiVercel } from 'react-icons/si'
import { TbDatabase } from 'react-icons/tb'

const techs = [
    { name: 'React', desc: 'Frontend SPA', icon: <SiReact /> },
    { name: 'TypeScript', desc: 'Static Typing', icon: <SiTypescript /> },
    { name: 'Express', desc: 'REST API', icon: <SiExpress /> },
    { name: 'Drizzle', desc: 'ORM', icon: <TbDatabase /> },
    { name: 'Supabase', desc: 'Database & Storage', icon: <SiSupabase /> },
    { name: 'Vercel', desc: 'Deploy', icon: <SiVercel /> },
]

const links = [
    { label: 'Backend Repository', url: 'https://github.com/CristianLopezGonzalez/express-js-on-vercel' },
    { label: 'Frontend Repository', url: 'https://github.com/CristianLopezGonzalez/vite-react' },
]

const Home = () => {
    return (
        <main className="home">
            {/* Brutalist Hero */}
            <section className="home-brutal-hero">
                <div className="hb-hero-top">
                    <span className="hb-hero-tag">TFG · 2026</span>
                </div>

                <h1 className="hb-hero-name">
                    CRISTIAN <br />
                    LOPEZ <br />
                    <span className="hb-hero-name-outline">GONZALEZ</span>
                </h1>

                <div className="hb-hero-bottom">
                    <p className="hb-hero-desc">
                        Plataforma web que centraliza información detallada sobre videojuegos, incluyendo personajes, armas, mapas y estadísticas. Construida con una API REST propia, base de datos relacional y un frontend moderno.
                    </p>
                    <div className="hb-hero-scroll">
                        {/* Empty spacer for alignment */}
                    </div>
                </div>
            </section>

            {/* Core Stack Section */}
            <section className="home-section">
                <h2 className="home-section-title">Development Stack</h2>
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

            {/* Project Context */}
            <section className="home-section">
                <h2 className="home-section-title">VideoGame DB</h2>
                <div className="home-desc" style={{ textAlign: 'left', margin: '0 0 4rem' }}>
                    This project is a centralized database for various video games,
                    currently supporting Valorant and Marathon. It demonstrates
                    complex data orchestration and a modular UI architecture.
                </div>

                <div className="home-links-container">
                    {links.map((l) => (
                        <a
                            className="home-link-row"
                            key={l.label}
                            href={l.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="home-link-text">{l.label}</span>
                            <span className="home-link-arrow">↗</span>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Home
