import NavbarMarathon from '../../components/marathon/NavbarMarathon'
import AbilityCard from '../../components/marathon/AbilityCard'
import useRunnerAbilities from '../../hooks/marathon/useRunnerAbilities.ts'
import '../../styles/MarathonHUD.css'
import './RunnerAbilities.css'

const RunnerAbilities = () => {
    const { data: abilities = [], isLoading, isError } = useRunnerAbilities()

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
                    <span className="m-status-value">SKILLS_MANIFEST_ACTIVE</span>
                </div>
                <div className="m-status-right">
                    <span className="m-status-label">SYNC:</span>
                    <span className="m-status-value">SECURE</span>
                </div>
            </div>

            <main className="m-abilities-page">
                <header className="m-abilities-header">
                    <div className="m-header-id-wrap">
                        <span className="m-header-tag">// CYBERNETIC_MODS_v3.4</span>
                        <h1 className="m-header-title">ABILITIES</h1>
                    </div>
                    <div className="m-header-count">
                        <span className="m-count-label">RECORDS_FOUND:</span>
                        <span className="m-count-val">[{abilities.length}]</span>
                    </div>
                </header>

                <section className="m-abilities-grid-section">
                    {isLoading && (
                        <div className="m-abilities-grid">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <div key={i} className="m-abilities-skeleton" />
                            ))}
                        </div>
                    )}

                    {isError && (
                        <div className="m-abilities-error">
                            <span className="m-error-icon">⚠</span>
                            <div className="m-error-info">
                                <span className="m-error-title">UPLINK_FAILURE</span>
                                <p className="m-error-text">Failed to retrieve abilities data. System re-sync required.</p>
                            </div>
                        </div>
                    )}

                    {!isLoading && !isError && (
                        <div className="m-abilities-grid">
                            {abilities.map(ability => (
                                <AbilityCard key={ability.abilityId} ability={ability} />
                            ))}
                        </div>
                    )}
                </section>
            </main>
        </div>
    )
}

export default RunnerAbilities
