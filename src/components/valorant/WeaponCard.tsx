import { Weapon } from '../../api/valorant/weapons.ts'
import './WeaponCard.css'

interface WeaponCardProps {
    weapon: Weapon
}

const StatBar = ({ label, value, max, color = '#ff4655' }: { label: string; value: number; max: number, color?: string }) => {
    const percentage = Math.min((value / max) * 100, 100)
    return (
        <div className="weapon-stat-panel">
            <div className="weapon-stat-data">
                <span className="weapon-stat-tag">{label}</span>
                <span className="weapon-stat-num">{value}</span>
            </div>
            <div className="weapon-stat-track">
                <div 
                    className="weapon-stat-fill" 
                    style={{ 
                        width: `${percentage}%`,
                        backgroundColor: color 
                    }} 
                />
            </div>
        </div>
    )
}

const WeaponCard = ({ weapon }: WeaponCardProps) => {
    return (
        <div className="v-weapon-card">
            {/* Background Accent */}
            <div className="v-weapon-card-glow" />
            
            <div className="v-weapon-card-header">
                <div className="v-weapon-id-wrap">
                    <span className="v-weapon-serial">// ARCHIVE_{weapon.weaponId}</span>
                    <span className="v-weapon-type-tag">{weapon.type.toUpperCase()}</span>
                </div>
                <div className="v-weapon-status">
                    <span className="v-status-dot" />
                    <span className="v-status-text">ARMAMENT_READY</span>
                </div>
            </div>

            <div className="v-weapon-card-main">
                <div className="v-weapon-visual">
                    <img src={weapon.icon} alt={weapon.weaponName} className="v-weapon-img" />
                    <div className="v-weapon-backdrop-text">{weapon.weaponName}</div>
                </div>

                <div className="v-weapon-identity">
                    <h2 className="v-weapon-name">{weapon.weaponName}</h2>
                    <div className="v-weapon-meta">
                        <span className="v-meta-item">MODE: {weapon.fireMode.toUpperCase()}</span>
                        <span className="v-meta-divider" />
                        <span className="v-meta-item">MAG: {weapon.magazine}</span>
                    </div>
                </div>
            </div>

            <div className="v-weapon-card-footer">
                <div className="v-weapon-stats-grid">
                    <StatBar label="HEAD" value={weapon.headDamage} max={200} />
                    <StatBar label="BODY" value={weapon.bodyDamage} max={200} />
                    <StatBar label="LEGS" value={weapon.legDamage} max={200} />
                </div>
                
                <div className="v-weapon-technical-data">
                    <div className="v-tech-item">
                        <span className="v-tech-label">FIRE_RATE</span>
                        <span className="v-tech-val">{weapon.fireRate}<small>rds/s</small></span>
                    </div>
                    <div className="v-tech-item">
                        <span className="v-tech-label">RELOAD</span>
                        <span className="v-tech-val">{weapon.reloadSpeed}<small>sec</small></span>
                    </div>
                </div>
            </div>

            {/* Tactical Decals */}
            <div className="v-weapon-decal v-decal-tl">+</div>
            <div className="v-weapon-decal v-decal-tr">+</div>
            <div className="v-weapon-decal v-decal-bl">+</div>
            <div className="v-weapon-decal v-decal-br">+</div>
        </div>
    )
}

export default WeaponCard