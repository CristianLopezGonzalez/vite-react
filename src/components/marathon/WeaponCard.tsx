import type { MarathonWeapons } from '../../api/marathon/weapons.ts'
import './WeaponCard.css'

interface Props {
    weapon: MarathonWeapons
}

const WeaponCard = ({ weapon }: Props) => {
    return (
        <div className="m-weapon-card">
            {/* Header */}
            <div className="m-weapon-card-header">
                <div>
                    <span className="m-weapon-type">{weapon.type.toUpperCase()}</span>
                    <h3 className="m-weapon-name">{weapon.weaponName}</h3>
                </div>
            </div>

            {/* Visual */}
            <div className="m-weapon-visual">
                <img src={weapon.icon} alt={weapon.description} />
            </div>

            {/* Stats */}
            <div className="m-weapon-stats">
                <div className="m-stat-box">
                    <span className="m-stat-label">HEAD_DMG</span>
                    <span className="m-stat-value">{weapon.headDamage}</span>
                </div>
                <div className="m-stat-box">
                    <span className="m-stat-label">BODY_DMG</span>
                    <span className="m-stat-value">{weapon.bodyDamage}</span>
                </div>
                <div className="m-stat-box">
                    <span className="m-stat-label">CAPACITY</span>
                    <span className="m-stat-value">{weapon.magazine}</span>
                </div>
            </div>

            {/* Intel */}
            <div className="m-intel-block">
                <p className="m-intel-text">{weapon.description}</p>
            </div>

            {/* HUD Accents */}
            <div className="m-card-corner tl" />
            <div className="m-card-corner br" />
        </div>
    )
}

export default WeaponCard
