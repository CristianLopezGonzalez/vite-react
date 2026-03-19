import type { MarathonFaction } from '../../api/marathon/factions.ts'
import './FactionCard.css'

interface Props {
    faction: MarathonFaction
}

const FactionCard = ({ faction }: Props) => {
    return (
        <div className="m-faction-card">
            {/* Header */}
            <div className="m-faction-card-header">
                <div>
                    <span className="m-faction-id">// FACTION_{faction.factionId.toString().padStart(3, '0')}</span>
                    <h3 className="m-faction-name">{faction.factionName}</h3>
                </div>
            </div>

            {/* Visual */}
            <div className="m-faction-visual">
                <img src={faction.icon} alt={faction.factionName} className="m-faction-icon" />
            </div>

            {/* Info */}
            <div className="m-faction-info">
                <div className="m-leader-box">
                    <span className="m-stat-label">LEADER</span>
                    <span className="m-stat-value-text">{faction.leader}</span>
                </div>
            </div>

            {/* Intel */}
            <div className="m-intel-block">
                <p className="m-intel-text">{faction.description}</p>
            </div>

            {/* HUD Accents */}
            <div className="m-card-corner tl" />
            <div className="m-card-corner br" />
            <div className="m-card-corner tr" />
            <div className="m-card-corner bl" />
        </div>
    )
}

export default FactionCard
