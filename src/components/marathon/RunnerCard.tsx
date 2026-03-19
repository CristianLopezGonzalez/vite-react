import type { MarathonRunners } from '../../api/marathon/runners.ts'
import './RunnerCard.css'

interface Props {
    runner: MarathonRunners
}

const RunnerCard = ({ runner }: Props) => {
    return (
        <div className="m-runner-dossier">
            {/* Portrait Panel (Left) */}
            <div className="m-runner-portrait-wrap">
                <div className="m-portrait-bg-grid" />
                <img
                    src={runner.icon}
                    alt={runner.runnerName}
                    className="m-runner-img"
                />
            </div>

            {/* Content Panel (Right) */}
            <div className="m-card-content-right">
                {/* HUD Header */}
                <div className="m-runner-header">
                    <div className="m-runner-serial">
                        <span className="m-runner-id">// RUNNER_{runner.runnerId}</span>
                        <span className="m-runner-model-tag">{runner.model}</span>
                    </div>
                    <div className="m-runner-status">
                        <span className="m-status-pulse" />
                        <span className="m-status-text">ACTIVE</span>
                    </div>
                </div>

                {/* Info Panel */}
                <div className="m-runner-info">
                    <h3 className="m-runner-name">{runner.runnerName}</h3>
                    <div className="m-intel-block">
                        <span className="m-intel-tag">CLASS_INTEL:</span>
                        <p className="m-intel-desc">{runner.description}</p>
                    </div>
                </div>
            </div>

            {/* HUD Accents */}
            <div className="m-runner-corner m-c-tl" />
            <div className="m-runner-corner m-c-tr" />
            <div className="m-runner-corner m-c-bl" />
            <div className="m-runner-corner m-c-br" />
            <div className="m-runner-scanline" />
        </div>
    )
}

export default RunnerCard
