import NavbarMarathon from '../../components/marathon/NavbarMarathon'
import WeaponCard from '../../components/marathon/WeaponCard'
import useWeapons from '../../hooks/marathon/useWeapons.ts'
import '../../styles/MarathonHUD.css'
import './Weapons.css'

const Weapons = () => {
    const { data: weapons = [], isLoading, isError } = useWeapons()

    return (
        <div className="marathon-hud-container">
            <NavbarMarathon />
            <div className="marathon-hud-scan-laser" />

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
                    <span className="m-status-value">WEAPON_MANIFEST_ACTIVE</span>
                </div>
                <div className="m-status-right">
                    <span className="m-status-label">SYNC:</span>
                    <span className="m-status-value">ARSENAL_DATA_STREAM_SECURE</span>
                </div>
            </div>

            <main className="m-weapons-page">
                <header className="m-weapons-header">
                    <div className="m-header-id-wrap">
                        <span className="m-header-tag">// ARMAMENT_DATABASE_v2.0</span>
                        <h1 className="m-header-title">THE_ARSENAL</h1>
                    </div>
                    <div className="m-header-count">
                        <span className="m-count-label">RECORDS_FOUND:</span>
                        <span className="m-count-val">[{weapons.length}]</span>
                    </div>
                </header>

                <section className="m-weapons-grid-section">
                    {isLoading && (
                        <div className="m-weapons-grid">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <div key={i} className="m-weapons-skeleton" />
                            ))}
                        </div>
                    )}

                    {isError && (
                        <div className="m-weapons-error">
                            <span className="m-error-icon">⚠</span>
                            <div className="m-error-info">
                                <span className="m-error-title">UPLINK_FAILURE</span>
                                <p className="m-error-text">Failed to retrieve armament data. System re-sync required.</p>
                            </div>
                        </div>
                    )}

                    {!isLoading && !isError && (
                        <div className="m-weapons-grid">
                            {weapons.map(weapon => (
                                <WeaponCard key={weapon.weaponId} weapon={weapon} />
                            ))}
                        </div>
                    )}
                </section>
            </main>
        </div>
    )
}

export default Weapons
