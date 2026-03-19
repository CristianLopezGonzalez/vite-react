import type { MarathonAbility } from '../../api/marathon/runnerAbilities.ts'
import './AbilityCard.css'

interface Props {
    ability: MarathonAbility
}

const AbilityCard = ({ ability }: Props) => {
    return (
        <div className="m-ability-card">
            {/* Header */}
            <div className="m-ability-card-header">
                <div>
                    <span className="m-ability-type">{ability.type.toUpperCase()}</span>
                    <h3 className="m-ability-name">{ability.abilityName}</h3>
                </div>
            </div>

            {/* Visual */}
            <div className="m-ability-visual">
                <img src={ability.icon} alt={ability.abilityName} />
            </div>

            {/* Stats */}
            <div className="m-ability-stats">
                <div className="m-stat-box full-width">
                    <span className="m-stat-label">COOLDOWN</span>
                    <span className="m-stat-value">{ability.cooldown}s</span>
                </div>
            </div>

            {/* Intel */}
            <div className="m-intel-block">
                <p className="m-intel-text">{ability.description}</p>
            </div>

            {/* HUD Accents */}
            <div className="m-card-corner tl" />
            <div className="m-card-corner br" />
        </div>
    )
}

export default AbilityCard
