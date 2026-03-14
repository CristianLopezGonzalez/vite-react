import { Weapon } from '../../api/weapons'
import './WeaponCard.css'

interface WeaponCardProps {
    weapon: Weapon
}

const StatBar = ({ label, value, max }: { label: string; value: number; max: number }) => {
    const percentage = Math.min((value / max) * 100, 100)
    return (
        <div className="weapon-stat">
            <div className="weapon-stat-header">
                <span className="weapon-stat-label">{label}</span>
                <span className="weapon-stat-value">{value}</span>
            </div>
            <div className="weapon-stat-bar">
                <div className="weapon-stat-fill" style={{ width: `${percentage}%` }} />
            </div>
        </div>
    )
}

const WeaponCard = ({ weapon }: WeaponCardProps) => {
    return (
        <div className="weapon-card">
            <div className="weapon-card-type">{weapon.type}</div>

            <div className="weapon-card-image">
                <img src={weapon.icon} alt={weapon.weaponName} />
            </div>

            <div className="weapon-card-body">
                <div className="weapon-card-title">
                    <h2 className="weapon-card-name">{weapon.weaponName}</h2>
                    <span className="weapon-card-firemode">{weapon.fireMode}</span>
                </div>

                <p className="weapon-card-desc">{weapon.description}</p>

                <div className="weapon-card-divider" />

                <div className="weapon-card-info-grid">
                    <div className="weapon-card-info-item">
                        <span className="weapon-card-info-label">Fire Rate</span>
                        <span className="weapon-card-info-val">{weapon.fireRate} rds/s</span>
                    </div>
                    <div className="weapon-card-info-item">
                        <span className="weapon-card-info-label">Reload</span>
                        <span className="weapon-card-info-val">{weapon.reloadSpeed}s</span>
                    </div>
                    <div className="weapon-card-info-item">
                        <span className="weapon-card-info-label">Magazine</span>
                        <span className="weapon-card-info-val">{weapon.magazine}</span>
                    </div>
                </div>

                <div className="weapon-card-divider" />

                <div className="weapon-card-stats">
                    <span className="weapon-card-stats-title">Damage</span>
                    <StatBar label="Head" value={weapon.headDamage} max={255} />
                    <StatBar label="Body" value={weapon.bodyDamage} max={255} />
                    <StatBar label="Legs" value={weapon.legDamage} max={255} />
                </div>
            </div>
        </div>
    )
}

export default WeaponCard