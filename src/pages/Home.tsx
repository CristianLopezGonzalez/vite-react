import { Link } from 'react-router-dom'
import { SiReact, SiTypescript, SiExpress, SiSupabase, SiVercel } from 'react-icons/si'
import { TbDatabase } from 'react-icons/tb'
import './Home.css'

const techs = [
    { name: 'React', desc: 'Frontend SPA', icon: <SiReact /> },
    { name: 'TypeScript', desc: 'Static Typing', icon: <SiTypescript /> },
    { name: 'Express', desc: 'REST API', icon: <SiExpress /> },
    { name: 'Drizzle', desc: 'ORM', icon: <TbDatabase /> },
    { name: 'Supabase', desc: 'Database & Storage', icon: <SiSupabase /> },
    { name: 'Vercel', desc: 'Deploy', icon: <SiVercel /> },
]

const games = [
    {
        id: 'valorant',
        title: 'VALORANT',
        subtitle: 'Tactical Shooter',
        desc: 'Explore agents, weapons, maps and roles in this 5v5 tactical shooter by Riot Games.',
        path: '/valorant',
        color: '#ff4655',
        bg: 'https://assets.xboxservices.com/assets/4e/bc/4ebcb533-e184-42f3-833b-9aa47a81f39e.jpg?n=153142244433_Poster-Image-1084_1920x720.jpg',
    },
    {
        id: 'marathon',
        title: 'MARATHON',
        subtitle: 'Extraction Shooter',
        desc: 'Discover runners, weapons, factions and abilities in Bungie\'s sci-fi extraction shooter.',
        path: '/marathon',
        color: '#c0fe04',
        bg: 'https://imguscdn.gamespress.com/cdn/files/Bungie/2026/03/041840-4518b067/2026_Marathon_Launch_Press_Kit_Compressed_001.jpg?otf=y&lightbox=y&sky=e0e09229f0a271cf18e6120538cfebabd9f405eff3bb90318256cc9e01e5a6e2&w=1024&maxheight=4096&mode=pad&format=jpg',
    },
]

const Home = () => {
    return (
        <main className="wg-home">
            {/* Noise overlay */}
            <div className="wg-noise" />

            {/* ─── Hero ─── */}
            <section className="wg-hero">
                <div className="wg-hero-bg-grid" />

                <div className="wg-hero-content">
                    <div className="wg-hero-eyebrow">
                        <span className="wg-eyebrow-line" />
                        <span>TFG · 2026 · Cristian Lopez Gonzalez</span>
                        <span className="wg-eyebrow-line" />
                    </div>

                    <h1 className="wg-hero-title">
                        <span className="wg-hero-title-top">WIKI</span>
                        <span className="wg-hero-title-bot">GAMES</span>
                    </h1>

                    <p className="wg-hero-desc">
                        La enciclopedia definitiva de videojuegos. Consulta datos completos sobre agentes,
                        armas, mapas, habilidades, facciones y estadísticas de tus juegos favoritos.
                    </p>

                    <div className="wg-hero-cta-row">
                        <Link to="/valorant" className="wg-cta-btn wg-cta-valorant">Explorar Valorant</Link>
                        <Link to="/marathon" className="wg-cta-btn wg-cta-marathon">Explorar Marathon</Link>
                    </div>
                </div>

                <div className="wg-hero-scroll-hint">
                    <span className="wg-scroll-line" />
                    <span>SCROLL</span>
                </div>
            </section>

            {/* ─── Games Grid ─── */}
            <section className="wg-games-section">
                <div className="wg-section-label">
                    <span className="wg-label-line" />
                    CATÁLOGO DE JUEGOS
                </div>
                <div className="wg-games-grid">
                    {games.map(g => (
                        <div key={g.id} className="wg-game-card-wrapper">
                            <Link to={g.path} className={`wg-game-card wg-game-card--${g.id}`}>
                                <div
                                    className="wg-game-card-bg"
                                    style={{ backgroundImage: `url('${g.bg}')` }}
                                />
                                <div className="wg-game-card-overlay" style={{ '--accent': g.color } as React.CSSProperties} />
                                <div className="wg-game-card-content">
                                    <span className="wg-game-subtitle" style={{ color: g.color }}>{g.subtitle}</span>
                                    <h2 className="wg-game-title">{g.title}</h2>
                                    <p className="wg-game-desc">{g.desc}</p>
                                    <span className="wg-game-enter" style={{ borderColor: g.color, color: g.color }}>
                                        Entrar ↗
                                    </span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─── Tech Stack ─── */}
            <section className="wg-tech-section">
                <div className="wg-section-label">
                    <span className="wg-label-line" />
                    STACK TECNOLÓGICO
                </div>
                <div className="wg-tech-grid">
                    {techs.map(t => (
                        <div key={t.name} className="wg-tech-card-wrapper">
                            <div className="wg-tech-card">
                                <span className="wg-tech-icon">{t.icon}</span>
                                <span className="wg-tech-name">{t.name}</span>
                                <span className="wg-tech-role">{t.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─── About ─── */}
            <section className="wg-about-section">
                <div className="wg-about-inner">
                    <div className="wg-about-left">
                        <div className="wg-section-label">
                            <span className="wg-label-line" />
                            SOBRE EL PROYECTO
                        </div>
                        <h2 className="wg-about-title">Trabajo de<br />Fin de Grado</h2>
                    </div>
                    <div className="wg-about-right">
                        <p className="wg-about-text">
                            WikiGames es un proyecto académico desarrollado por <strong>Cristian Lopez Gonzalez</strong> como Trabajo de Fin de Grado. La plataforma centraliza información detallada sobre videojuegos, incluyendo personajes, armas, mapas y estadísticas, construida con una API REST propia, base de datos relacional y un frontend moderno.
                        </p>
                        <div className="wg-about-links">
                            <a className="wg-about-link" href="https://github.com/CristianLopezGonzalez/express-js-on-vercel" target="_blank" rel="noreferrer">
                                Backend Repository ↗
                            </a>
                            <a className="wg-about-link" href="https://github.com/CristianLopezGonzalez/vite-react" target="_blank" rel="noreferrer">
                                Frontend Repository ↗
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home
