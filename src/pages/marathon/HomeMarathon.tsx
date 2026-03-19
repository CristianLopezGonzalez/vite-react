import { Link } from 'react-router-dom'
import NavbarMarathon from '../../components/marathon/NavbarMarathon'
import useRunners from '../../hooks/marathon/useRunners.ts'
import useWeapons from '../../hooks/marathon/useWeapons.ts'
import useFactions from '../../hooks/marathon/useFactions.ts'
import '../../styles/MarathonHUD.css'
import './HomeMarathon.css'

const HomeMarathon = () => {
    const { data: runners = [], isLoading: loadingRunners } = useRunners()
    const { data: weapons = [], isLoading: loadingWeapons } = useWeapons()
    const { data: factions = [] } = useFactions()

    return (
        <div className="marathon-hud-container">
            <NavbarMarathon />

            {/* HUD Overlays */}
            <div className="marathon-hud-noise" />
            <div className="marathon-hud-vignette" />
            <div className="marathon-hud-edge m-edge-tl" />
            <div className="marathon-hud-edge m-edge-tr" />
            <div className="marathon-hud-edge m-edge-bl" />
            <div className="marathon-hud-edge m-edge-br" />

            {/* Status Bar */}
            <div className="marathon-hud-status-bar">
                <div className="m-status-left">
                    <span className="m-status-label">SYS_DATABASE:</span>
                    <span className="m-status-value">MARATHON_INIT_COMPLETE</span>
                </div>
                <div className="m-status-right">
                    <span className="m-status-label">SYNC:</span>
                    <span className="m-status-value">HUB_UPLINK_SECURE</span>
                </div>
            </div>

            <main className="home-marathon">

                {/* ─── Hero ─── */}
                <section className="hm-hero">
                    <div className="hm-hero-bg" />
                    <div className="hm-hero-overlay" />

                    <div className="hm-hero-content">
                        <div className="hm-hero-eyebrow">
                            <span className="hm-eyebrow-line" />
                            Extraction Shooter · Bungie · 2025
                        </div>
                        <h1 className="hm-hero-title">
                            MARA<span className="hm-hero-title-accent">THON</span>
                        </h1>
                        <p className="hm-hero-desc">
                            Elige a tu Runner, equípate con armas de última generación y adéntrate en territorio hostil para extraer recursos valiosos... o morir en el intento.
                        </p>
                        <div className="hm-hero-stats">
                            <div className="hm-hero-stat">
                                <span className="hm-hero-stat-value">{loadingRunners ? '—' : runners.length}</span>
                                <span className="hm-hero-stat-label">Runners</span>
                            </div>
                            <div className="hm-hero-stat">
                                <span className="hm-hero-stat-value">{loadingWeapons ? '—' : weapons.length}</span>
                                <span className="hm-hero-stat-label">Weapons</span>
                            </div>
                            <div className="hm-hero-stat">
                                <span className="hm-hero-stat-value">{factions.length || '—'}</span>
                                <span className="hm-hero-stat-label">Factions</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── Runners preview ─── */}
                <section className="hm-section">
                    <div className="hm-section-header">
                        <div>
                            <div className="hm-section-eyebrow">
                                <span className="hm-eyebrow-line" />operative roster
                            </div>
                            <h2 className="hm-section-title">Runners</h2>
                            <p className="hm-section-desc">
                                Cada Runner aporta un modelo único y un estilo de juego diferente. Elige el tuyo con cuidado.
                            </p>
                        </div>
                        <Link to="/marathon/runners" className="hm-section-link">
                            Ver todos ↗
                        </Link>
                    </div>
                    <div className="hm-runners-preview">
                        {!loadingRunners && runners.slice(0, 4).map(runner => (
                            <Link to="/marathon/runners" key={runner.runnerId} className="hm-runner-card">
                                <img src={runner.icon} alt={runner.runnerName} loading="lazy" />
                                <div className="hm-runner-card-overlay">
                                    <span className="hm-runner-card-model">{runner.model}</span>
                                    <span className="hm-runner-card-name">{runner.runnerName}</span>
                                </div>
                            </Link>
                        ))}
                        {loadingRunners && Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="hm-skeleton" />
                        ))}
                    </div>
                </section>

                {/* ─── Weapons preview ─── */}
                <section className="hm-section hm-section--alt">
                    <div className="hm-section-header">
                        <div>
                            <div className="hm-section-eyebrow">
                                <span className="hm-eyebrow-line" />armament database
                            </div>
                            <h2 className="hm-section-title">Weapons</h2>
                            <p className="hm-section-desc">
                                De SMGs de fuego rápido a rifles de precisión — elige tu loadout con sabiduría.
                            </p>
                        </div>
                        <Link to="/marathon/weapons" className="hm-section-link">
                            Ver todos ↗
                        </Link>
                    </div>
                    <div className="hm-weapons-preview">
                        {!loadingWeapons && weapons.slice(0, 4).map(weapon => (
                            <Link to="/marathon/weapons" key={weapon.weaponId} className="hm-weapon-card">
                                <span className="hm-weapon-card-type">{weapon.type}</span>
                                <div className="hm-weapon-card-img-wrap">
                                    <img src={weapon.icon} alt={weapon.weaponName} loading="lazy" />
                                </div>
                                <h3 className="hm-weapon-card-name">{weapon.weaponName}</h3>
                                <div className="hm-weapon-card-stats">
                                    <span>{weapon.headDamage} <em>HD</em></span>
                                    <span>{weapon.bodyDamage} <em>BD</em></span>
                                    <span>{weapon.magazine} <em>MAG</em></span>
                                </div>
                            </Link>
                        ))}
                        {loadingWeapons && Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="hm-skeleton" />
                        ))}
                    </div>
                </section>

                {/* ─── Factions teaser ─── */}
                <section className="hm-section hm-factions-teaser">
                    <div className="hm-section-header">
                        <div>
                            <div className="hm-section-eyebrow">
                                <span className="hm-eyebrow-line" />alliance registry
                            </div>
                            <h2 className="hm-section-title">Factions</h2>
                            <p className="hm-section-desc">
                                Distintas facciones se enfrentan por el control del planeta. Cuida con quién te alías.
                            </p>
                        </div>
                        <Link to="/marathon/factions" className="hm-section-link">
                            Ver todas ↗
                        </Link>
                    </div>
                    <div className="hm-factions-accordion">
                        {factions.slice(0, 4).map(faction => (
                            <Link to="/marathon/factions" key={faction.factionId} className="hm-faction-panel">
                                <img src={faction.icon} alt={faction.factionName} />
                                <span className="hm-faction-panel-name-vertical">{faction.factionName}</span>
                                <div className="hm-faction-panel-content">
                                    <span className="hm-faction-panel-name">{faction.factionName}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

            </main>
        </div>
    )
}

export default HomeMarathon