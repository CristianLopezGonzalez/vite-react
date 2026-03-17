import NavbarValorant from '../../components/valorant/NavbarValorant'
import MapCard from '../../components/valorant/MapCard'
import useMaps from '../../hooks/valorant/useMaps.ts'
import './Maps.css'

const Maps = () => {
    const { data: maps = [], isLoading: loading, error } = useMaps()

    if (error) return <div className="maps-error">Error al cargar los mapas</div>

    return (
        <>
            <NavbarValorant />
            <main className="maps-page">
                <div className="maps-header">
                    <h1 className="maps-title">Maps</h1>
                    <span className="maps-count">
            {!loading ? `${maps.length} maps` : '—'}
          </span>
                </div>

                {loading ? (
                    <div className="maps-loading">
                        <span>Loading...</span>
                    </div>
                ) : (
                    <div className="maps-grid">
                        {maps.map(map => (
                            <MapCard key={map.mapId} map={map} />
                        ))}
                    </div>
                )}
            </main>
        </>
    )
}

export default Maps