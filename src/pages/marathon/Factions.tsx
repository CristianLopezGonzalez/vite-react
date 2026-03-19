import NavbarMarathon from '../../components/marathon/NavbarMarathon'
import FactionCard from '../../components/marathon/FactionCard'
import useFactions from '../../hooks/marathon/useFactions.ts'
import '../../styles/MarathonHUD.css'
import './Factions.css'

const Factions = () => {
    const { data: factions = [], isLoading, isError } = useFactions()

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
                    <span className="m-status-value">FACTION_MANIFEST_ACTIVE</span>
                </div>
                <div className="m-status-right">
                    <span className="m-status-label">SYNC:</span>
                    <span className="m-status-value">SECURE</span>
                </div>
            </div>

            <main className="m-factions-page">
                <header className="m-factions-header">
                    <div className="m-header-id-wrap">
                        <span className="m-header-tag">// ALLIANCE_DATABASE_v1.0</span>
                        <h1 className="m-header-title">FACTIONS</h1>
                    </div>
                    <div className="m-header-count">
                        <span className="m-count-label">RECORDS_FOUND:</span>
                        <span className="m-count-val">[{factions.length}]</span>
                    </div>
                </header>

                <section className="m-factions-grid-section">
                    {isLoading && (
                        <div className="m-factions-grid">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="m-factions-skeleton" />
                            ))}
                        </div>
                    )}

                    {isError && (
                        <div className="m-factions-error">
                            <span className="m-error-icon">⚠</span>
                            <div className="m-error-info">
                                <span className="m-error-title">UPLINK_FAILURE</span>
                                <p className="m-error-text">Failed to retrieve faction data. System re-sync required.</p>
                            </div>
                        </div>
                    )}

                    {!isLoading && !isError && (
                        <div className="m-factions-grid">
                            {factions.map(faction => (
                                <FactionCard key={faction.factionId} faction={faction} />
                            ))}
                        </div>
                    )}
                </section>
            </main>
        </div>
    )
}

export default Factions
