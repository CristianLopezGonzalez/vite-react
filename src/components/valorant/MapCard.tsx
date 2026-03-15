import {Map} from '../../api/maps'
import './MapCard.css'

interface MapCardProps {
    map: Map
}

const MapCard = ({map}: MapCardProps) => {
    return (
        <div className="map-card">
            <div className="map-card-bg">
                <img src={map.icon} alt={map.mapName} className="map-card-bg-img" loading="lazy"/>
                <div className="map-card-bg-overlay"/>
            </div>

            <div className="map-card-content">
                <div className="map-card-radar-wrapper">
                    <div className="map-card-radar-ring map-card-radar-ring--outer"/>
                    <div className="map-card-radar-ring map-card-radar-ring--middle"/>
                    <div className="map-card-radar-sweep"/>
                    <div className="map-card-radar">
                        <img src={map.miniMap} alt={`${map.mapName} minimap`} loading="lazy"/>
                    </div>
                </div>

                <div className="map-card-info">
                    <h2 className="map-card-name">{map.mapName}</h2>
                    <div className="map-card-sites">
                        <span className="map-card-sites-label">Spike Sites</span>
                        <span className="map-card-sites-value">{map.spikeSites}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapCard