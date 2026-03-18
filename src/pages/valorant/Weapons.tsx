import { useState, useMemo } from 'react'
import NavbarValorant from '../../components/valorant/NavbarValorant'
import WeaponCard from '../../components/valorant/WeaponCard'
import useWeapons from '../../hooks/valorant/useWeapons.ts'
import './Weapons.css'

const WEAPON_TYPES = ['All', 'Sidearm', 'SMG', 'Shotgun', 'Rifle', 'Sniper Rifle', 'Machine Gun', 'Melee']

const Weapons = () => {
    const { data: weapons = [], isLoading: loading, error } = useWeapons()
    const [activeType, setActiveType] = useState('All')

    const filtered = useMemo(() =>
            activeType === 'All'
                ? weapons
                : weapons.filter(w => w.type === activeType),
        [weapons, activeType]
    )

    return (
        <>
            <NavbarValorant />
            <main className="weapons-page">
                <div className="weapons-header">
                    <h1 className="weapons-title">Weapons</h1>
                    <span className="weapons-count">
                        {!loading ? `${filtered.length} weapons` : '—'}
                    </span>
                </div>

                <div className="weapons-filters">
                    {WEAPON_TYPES.map(type => (
                        <button
                            key={type}
                            className={`weapons-filter-btn ${activeType === type ? 'active' : ''}`}
                            onClick={() => setActiveType(type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="weapons-grid">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="weapon-skeleton" />
                        ))}
                    </div>
                ) : error ? (
                    <div className="weapons-error-container">
                        <span className="v-error-icon">⚠</span>
                        <div className="v-error-info">
                            <span className="v-error-title">ARMORY_LOCKDOWN</span>
                            <p className="v-error-text">Uplink to weapons cache failed. Authorization level insufficient.</p>
                        </div>
                    </div>
                ) : (
                    <div className="weapons-grid">
                        {filtered.map(weapon => (
                            <WeaponCard key={weapon.weaponId} weapon={weapon} />
                        ))}
                    </div>
                )}
            </main>
        </>
    )
}

export default Weapons