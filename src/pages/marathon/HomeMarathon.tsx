import { Link } from 'react-router-dom'
import NavbarMarathon from '../../components/marathon/NavbarMarathon'
import useRunners from '../../hooks/marathon/useRunners.ts'
import useWeapons from '../../hooks/marathon/useWeapons.ts'
import '../../styles/MarathonHUD.css'
import './HomeMarathon.css'

const HomeMarathon = () => {
    const { data: runners = [], isLoading: loadingRunners } = useRunners()
    const { data: weapons = [], isLoading: loadingWeapons } = useWeapons()

    return (
        <div className="marathon-hud-container">
            <NavbarMarathon />

            {/* Permanent HUD Overlays */}
            <div className="marathon-hud-noise" />
            <div className="marathon-hud-vignette" />
            <div className="marathon-hud-edge m-edge-tl" />
            <div className="marathon-hud-edge m-edge-tr" />
            <div className="marathon-hud-edge m-edge-bl" />
            <div className="marathon-hud-edge m-edge-br" />

            {/* Tactical Status Bar */}
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

                {/* Hero */}
                <section className="hm-hero">
                    <div className="hm-hero-bg" />
                    <div className="hm-hero-overlay" />
                    <div className="hm-hero-content">
                        <span className="hm-hero-tag">Extraction Shooter · Marathon</span>
                        <h1 className="hm-hero-title">
                            MARA<span className="hm-hero-title-accent">THON</span>
                        </h1>
                        <p className="hm-hero-desc">
                            A sci-fi extraction shooter set in a distant future. Choose your Runner,
                            gear up with cutting-edge weapons and venture into hostile territory to
                            extract valuable resources — or die trying.
                        </p>
                        <div className="hm-hero-stats">
                            <div className="hm-hero-stat">
                                <span className="hm-hero-stat-value">
                                    {loadingRunners ? '—' : runners.length}
                                </span>
                                <span className="hm-hero-stat-label">Runners</span>
                            </div>
                            <div className="hm-hero-stat-divider" />
                            <div className="hm-hero-stat">
                                <span className="hm-hero-stat-value">
                                    {loadingWeapons ? '—' : weapons.length}
                                </span>
                                <span className="hm-hero-stat-label">Weapons</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Runners preview */}
                <section className="hm-section">
                    <div className="hm-section-header">
                        <div>
                            <h2 className="hm-section-title">Runners</h2>
                            <p className="hm-section-desc">
                                Each runner brings a unique suit model and playstyle to the field.
                            </p>
                        </div>
                        <Link to="/marathon/runners" className="hm-section-link">
                            View all <span>↗</span>
                        </Link>
                    </div>
                    <div className="hm-runners-preview">
                        {loadingRunners && (
                            <div className="hm-loading">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <div key={i} className="hm-skeleton" />
                                ))}
                            </div>
                        )}
                        {!loadingRunners && runners.slice(0, 4).map(runner => (
                            <Link to="/marathon/runners" key={runner.runnerId} className="hm-runner-card">
                                <img src={runner.icon} alt={runner.runnerName} loading="lazy" />
                                <div className="hm-runner-card-overlay">
                                    <span className="hm-runner-card-model">{runner.model}</span>
                                    <span className="hm-runner-card-name">{runner.runnerName}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Weapons preview */}
                <section className="hm-section hm-section--alt">
                    <div className="hm-section-header">
                        <div>
                            <h2 className="hm-section-title">Weapons</h2>
                            <p className="hm-section-desc">
                                From rapid-fire SMGs to precision rifles — choose your loadout wisely.
                            </p>
                        </div>
                        <Link to="/marathon/weapons" className="hm-section-link">
                            View all <span>↗</span>
                        </Link>
                    </div>
                    <div className="hm-weapons-preview">
                        {loadingWeapons && (
                            <div className="hm-loading">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <div key={i} className="hm-skeleton hm-skeleton--weapon" />
                                ))}
                            </div>
                        )}
                        {!loadingWeapons && weapons.slice(0, 4).map(weapon => (
                            <Link to="/marathon/weapons" key={weapon.weaponId} className="hm-weapon-card">
                                <span className="hm-weapon-card-type">{weapon.type}</span>
                                <div className="hm-weapon-card-img-wrap">
                                    <img src={weapon.icon} alt={weapon.description} loading="lazy" />
                                </div>
                                <div className="hm-weapon-card-stats">
                                    <span>{weapon.headDamage} <em>HD</em></span>
                                    <span>{weapon.bodyDamage} <em>BD</em></span>
                                    <span>{weapon.magazine} <em>MAG</em></span>
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