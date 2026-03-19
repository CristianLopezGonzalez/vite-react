import type { MarathonRunners } from '../../api/marathon/runners.ts'
import './RunnerCard.css'

interface Props {
    runner: MarathonRunners
}

const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
        case 'prime': return '#c0fe04'
        case 'tactical': return '#4af3ff'
        case 'passive': return '#aaa'
        default: return '#c0fe04'
    }
}

const RunnerCard = ({ runner }: Props) => {
    return (
        <div className="m-runner-card">
            {/* Full-background character art */}
            <div className="m-runner-bg">
                <img src={runner.icon} alt={runner.runnerName} loading="lazy" />
                <div className="m-runner-bg-overlay" />
            </div>

            {/* Foreground content */}
            <div className="m-runner-foreground">
                {/* Top bar */}
                <div className="m-runner-top">
                    <div className="m-runner-serial">
                        <span className="m-runner-num">// {String(runner.runnerId).padStart(2, '0')}</span>
                        <span className="m-runner-model-badge">{runner.model || runner.Model}</span>
                    </div>
                    <div className="m-runner-status-pill">
                        <span className="m-status-dot" />
                        ACTIVE
                    </div>
                </div>

                {/* Name + Bio */}
                <div className="m-runner-main">
                    <h2 className="m-runner-big-name">{runner.runnerName}</h2>
                    <p className="m-runner-bio">{runner.description}</p>
                </div>

                {/* Abilities */}
                {runner.abilities && runner.abilities.length > 0 && (
                    <div className="m-runner-abilities-panel">
                        <span className="m-runner-abilities-label">ABILITIES</span>
                        <div className="m-runner-abilities-list">
                            {runner.abilities.map(ability => (
                                <div
                                    className="m-runner-ability-btn"
                                    key={ability.abilityId}
                                    style={{ '--type-color': getTypeColor(ability.type) } as React.CSSProperties}
                                >
                                    <img 
                                        src={ability.icon} 
                                        alt={ability.abilityName} 
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27 width%3D%2740%27 height%3D%2740%27 viewBox%3D%270 0 40 40%27%3E%3Crect width%3D%2740%27 height%3D%2740%27 fill%3D%27none%27 stroke%3D%27%23333%27 stroke-width%3D%272%27%2F%3E%3Ctext x%3D%2750%25%27 y%3D%2750%25%27 dominant-baseline%3D%27central%27 text-anchor%3D%27middle%27 fill%3D%27%23444%27 font-family%3D%27monospace%27 font-size%3D%2720%27%3E' + ability.abilityName.charAt(0) + '%3C%2Ftext%3E%3C%2Fsvg%3E';
                                        }}
                                    />
                                    <div className="m-runner-ability-tooltip">
                                        <span className="m-tooltip-type" style={{ color: getTypeColor(ability.type) }}>
                                            {ability.type.toUpperCase()}
                                        </span>
                                        <strong className="m-tooltip-name">{ability.abilityName}</strong>
                                        <p className="m-tooltip-desc">{ability.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* HUD Corner accents */}
            <div className="m-card-hud-corner tl" />
            <div className="m-card-hud-corner tr" />
            <div className="m-card-hud-corner bl" />
            <div className="m-card-hud-corner br" />
        </div>
    )
}

export default RunnerCard
