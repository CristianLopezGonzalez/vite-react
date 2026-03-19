import { Link } from 'react-router-dom'
import NavbarValorant from '../../components/valorant/NavbarValorant'
import useAgents from '../../hooks/valorant/useAgents.ts'
import useWeapons from '../../hooks/valorant/useWeapons.ts'
import useMaps from '../../hooks/valorant/useMaps.ts'
import './HomeValorant.css'

const HomeValorant = () => {
    const { data: agents = [], isLoading: loadingAgents } = useAgents()
    const { data: weapons = [], isLoading: loadingWeapons } = useWeapons()
    const { data: maps = [], isLoading: loadingMaps } = useMaps()

    return (
        <>
            <NavbarValorant />
            <main className="home-valorant">
                {/* Tactical HUD Elements */}
                <div className="hv-hud-edge hv-hud-edge--top-left" />
                <div className="hv-hud-edge hv-hud-edge--top-right" />
                <div className="hv-hud-edge hv-hud-edge--bottom-left" />
                <div className="hv-hud-edge hv-hud-edge--bottom-right" />
                <div className="hv-hud-noise" />
                <div className="hv-hud-vignette" />

                <div className="hv-hud-status">
                    <div className="hv-hud-status-line">SYSTEM: ONLINE</div>
                    <div className="hv-hud-status-line">ACCESS_LEVEL: ADMIN</div>
                    <div className="hv-hud-status-line">LOCATION: [REDACTED]</div>
                </div>

                {/* Hero */}
                <section className="hv-hero">
                    <div className="hv-hero-bg" />
                    <div className="hv-hero-overlay" />
                    <div className="hv-hero-content">
                        <span className="hv-hero-tag">Tactical FPS · Riot Games</span>
                        <h1 className="hv-hero-title">
                            VALO<span className="hv-hero-title-red">RANT</span>
                        </h1>
                        <p className="hv-hero-desc">
                            Showcase your style and experience on an international competitive stage. You'll have 13 rounds to attack and defend your side using precise weapon handling and tactical skills. And with only one life per round, you'll have to think faster than your opponents if you want to survive. Face off against your enemies in Competitive and Normal modes, as well as Deathmatch and Spike Rush.
                        </p>
                        <div className="hv-hero-stats">
                            <div className="hv-hero-stat">
                                <span className="hv-hero-stat-value">
                                    {loadingAgents ? '—' : agents.length}
                                </span>
                                <span className="hv-hero-stat-label">Agents</span>
                            </div>
                            <div className="hv-hero-stat-divider" />
                            <div className="hv-hero-stat">
                                <span className="hv-hero-stat-value">
                                    {loadingWeapons ? '—' : weapons.length}
                                </span>
                                <span className="hv-hero-stat-label">Weapons</span>
                            </div>
                            <div className="hv-hero-stat-divider" />
                            <div className="hv-hero-stat">
                                <span className="hv-hero-stat-value">
                                    {loadingMaps ? '—' : maps.length}
                                </span>
                                <span className="hv-hero-stat-label">Maps</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Agents preview */}
                <section className="hv-section">
                    <div className="hv-section-header">
                        <div>
                            <h2 className="hv-section-title">Agents</h2>
                            <p className="hv-section-desc">
                                Choose your agent and dominate the battlefield with unique abilities.
                            </p>
                        </div>
                        <Link to="/valorant/agents" className="hv-section-link">
                            View all <span>↗</span>
                        </Link>
                    </div>
                    <div className="hv-agents-preview">
                        {!loadingAgents && agents.slice(0, 6).map(agent => (
                            <Link to="/valorant/agents" key={agent.agentId} className="hv-agent-preview-card">
                                <img src={agent.icon} alt={agent.agentName} loading="lazy" />
                                <div className="hv-agent-preview-overlay">
                                    <span>{agent.agentName}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Weapons preview */}
                <section className="hv-section hv-section--dark">
                    <div className="hv-section-header">
                        <div>
                            <h2 className="hv-section-title">Weapons</h2>
                            <p className="hv-section-desc">
                                Master every weapon in the arsenal. From pistols to sniper rifles.
                            </p>
                        </div>
                        <Link to="/valorant/weapons" className="hv-section-link">
                            View all <span>↗</span>
                        </Link>
                    </div>
                    <div className="hv-weapons-preview">
                        {!loadingWeapons && weapons.slice(0, 4).map(weapon => (
                            <Link to="/valorant/weapons" key={weapon.weaponId} className="hv-weapon-preview-card">
                                <span className="hv-weapon-preview-type">{weapon.type}</span>
                                <img src={weapon.icon} alt={weapon.weaponName} loading="lazy" />
                                <span className="hv-weapon-preview-name">{weapon.weaponName}</span>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Maps preview */}
                <section className="hv-section">
                    <div className="hv-section-header">
                        <div>
                            <h2 className="hv-section-title">Maps</h2>
                            <p className="hv-section-desc">
                                Learn every corner of every map. Knowledge is half the battle.
                            </p>
                        </div>
                        <Link to="/valorant/maps" className="hv-section-link">
                            View all <span>↗</span>
                        </Link>
                    </div>
                    <div className="hv-maps-preview">
                        {!loadingMaps && maps.slice(0, 3).map(map => (
                            <Link to="/valorant/maps" key={map.mapId} className="hv-map-preview-card">
                                <img src={map.icon} alt={map.mapName} className="hv-map-preview-bg" loading="lazy" />
                                <div className="hv-map-preview-overlay" />
                                <div className="hv-map-preview-info">
                                    <span className="hv-map-preview-name">{map.mapName}</span>
                                    <span className="hv-map-preview-sites">{map.spikeSites}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

            </main>
        </>
    )
}

export default HomeValorant