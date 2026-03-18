import { useState } from 'react'
import { Role } from '../../api/valorant/roles.ts'
import { Agent } from '../../api/valorant/agents.ts'
import './RoleCard.css'

interface RoleCardProps {
    role: Role
    agents: Agent[]
}

const RoleCard = ({ role, agents }: RoleCardProps) => {
    const [activeAgentId, setActiveAgentId] = useState<number | null>(agents[0]?.agentId || null)

    return (
        <div className="role-card">
            {/* Class Icon as a Hero Element */}
            <div className="role-card-badge">
                <img src={role.icon} alt={role.roleName} className="role-badge-img" />
            </div>

            <div className="role-card-foreground">
                <div className="role-card-header">
                    <div className="role-card-id-badge">
                        <span className="role-card-tag">// CLASS_RECORDS_ALPHA</span>
                        <h2 className="role-card-big-name">{role.roleName}</h2>
                    </div>
                </div>

                <div className="role-card-body">
                    <p className="role-card-full-desc">{role.description}</p>
                </div>

                <div className="role-card-footer">
                    <div className="role-card-operatives-panel">
                        <div className="role-card-panel-header">
                            <span className="role-card-panel-label">CONFIRMED_OPERATIVES</span>
                            <span className="role-card-panel-count">[{agents.length}]</span>
                        </div>
                        
                        <div className="role-card-operatives-accordion">
                            {agents.map((agent) => (
                                <div 
                                    className={`operative-accordion-item ${activeAgentId === agent.agentId ? 'is-active' : ''}`} 
                                    key={agent.agentId}
                                    onMouseEnter={() => setActiveAgentId(agent.agentId)}
                                    onClick={() => setActiveAgentId(agent.agentId)}
                                >
                                    <div className="operative-accordion-content">
                                        <div className="operative-accordion-visual">
                                            <img src={agent.fullPortrait || agent.icon} alt={agent.agentName} className="operative-portrait" />
                                            <div className="operative-status-bar">
                                                <span className="status-label">READY</span>
                                            </div>
                                        </div>
                                        <div className="operative-accordion-info">
                                            <span className="operative-tag">#0{agent.agentNumber}</span>
                                            <h3 className="operative-name">{agent.agentName}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Dynamic HUD Borders */}
            <div className="role-card-hud-frame" />
        </div>
    )
}

export default RoleCard