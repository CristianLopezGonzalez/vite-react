import { useState } from 'react'
import {Map} from '../../api/valorant/maps.ts'
import './MapCard.css'

interface MapCardProps {
    map: Map
}

const MapCard = ({map}: MapCardProps) => {
    const [radarMode, setRadarMode] = useState(false)

    return (
        <div className={`map-card ${radarMode ? 'is-radar' : ''}`}>
            <div className="map-card-visual">
                <div className="map-card-main-img">
                    <img src={map.icon} alt={map.mapName} loading="lazy" />
                </div>
                <div className="map-card-radar-img">
                    <img src={map.miniMap} alt={`${map.mapName} radar`} loading="lazy" />
                </div>
                <div className="map-card-visual-overlay" />
                <div className="map-card-scanline" />
            </div>

            <div className="map-card-hud">
                <div className="map-card-top-hud">
                    <div className="map-card-id-block">
                        <span className="map-card-tag">SECTOR_ID</span>
                        <h2 className="map-card-big-name">{map.mapName}</h2>
                    </div>
                    <button 
                        className="map-card-radar-toggle"
                        onClick={() => setRadarMode(!radarMode)}
                    >
                        {radarMode ? 'VIEW_SATELLITE' : 'VIEW_RADAR'}
                    </button>
                </div>

                <div className="map-card-bottom-hud">
                    <div className="map-card-data-row">
                        <div className="map-card-data-item">
                            <span className="map-data-label">SPIKE_SITES</span>
                            <span className="map-data-value">{map.spikeSites}</span>
                        </div>
                        <div className="map-card-data-item">
                            <span className="map-data-label">SIGNAL</span>
                            <span className="map-data-value">STABLE</span>
                        </div>
                        <div className="map-card-data-item">
                            <span className="map-data-label">COORDS</span>
                            <span className="map-data-value">34.05 / -118.24</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* HUD Corner Accents */}
            <div className="map-hud-corner tl" />
            <div className="map-hud-corner tr" />
            <div className="map-hud-corner bl" />
            <div className="map-hud-corner br" />
        </div>
    )
}

export default MapCard