import NavbarMarathon from '../../components/marathon/NavbarMarathon'
import RunnerCard from '../../components/marathon/RunnerCard'
import useRunnersWithAbilities from '../../hooks/marathon/useRunnersWithAbilities.ts'
import '../../styles/MarathonHUD.css'
import './Runners.css'

const Runners = () => {
    const { data: runners = [], isLoading, isError } = useRunnersWithAbilities()

    return (
        <div className="marathon-hud-container">
            <NavbarMarathon />
            <div className="marathon-hud-scan-laser" />

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
                    <span className="m-status-value">RUNNER_REGISTRY_ACTIVE</span>
                </div>
                <div className="m-status-right">
                    <span className="m-status-label">SYNC:</span>
                    <span className="m-status-value">UPSTREAM_LINK_STABLE</span>
                </div>
            </div>

            <main className="m-runners-page">
                <header className="m-runners-header">
                    <div className="m-header-id-wrap">
                        <span className="m-header-tag">// OPERATIVE_MANIFEST_v4.2</span>
                        <h1 className="m-header-title">THE_RUNNERS</h1>
                    </div>
                    <div className="m-header-count">
                        <span className="m-count-label">ACTIVE_PROFILES:</span>
                        <span className="m-count-val">[{runners.length}]</span>
                    </div>
                </header>

                <section className="m-runners-grid-section">
                    {isLoading && (
                        <div className="m-runners-grid">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="m-runners-skeleton" />
                            ))}
                        </div>
                    )}

                    {isError && (
                        <div className="m-runners-error">
                            <span className="m-error-icon">⚠</span>
                            <div className="m-error-info">
                                <span className="m-error-title">DATA_SYNC_ERROR</span>
                                <p className="m-error-text">Failed to retrieve runner profiles. Check biometric uplink.</p>
                            </div>
                        </div>
                    )}

                    {!isLoading && !isError && (
                        <div className="m-runners-grid">
                            {runners.map(runner => (
                                <RunnerCard key={runner.runnerId} runner={runner} />
                            ))}
                        </div>
                    )}
                </section>
            </main>
        </div>
    )
}

export default Runners
