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

    if (error) return <div className="weapons-error">Error al cargar las armas</div>

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
                    <div className="weapons-loading">
                        <span>Loading...</span>
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