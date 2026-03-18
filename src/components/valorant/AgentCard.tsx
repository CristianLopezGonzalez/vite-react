import {Agent} from '../../api/valorant/agents.ts'
import {Role} from '../../api/valorant/roles.ts'
import './AgentCard.css'

interface AgentCardProps {
    agent: Agent
    role?: Role
}

const AgentCard = ({agent, role}: AgentCardProps) => {
    return (
        <div className="agent-card">
            <div className="agent-card-bg">
                <img src={agent.icon} alt={agent.agentName} loading="lazy" />
                <div className="agent-card-bg-overlay" />
            </div>

            <div className="agent-card-foreground">
                <div className="agent-card-top-panel">
                    <div className="agent-card-id">
                        <span className="agent-card-num">#{String(agent.agentNumber).padStart(2, '0')}</span>
                        <span className="agent-card-race-tag">{agent.race}</span>
                    </div>
                    {role && (
                        <div className="agent-card-role-panel">
                            <img src={role.icon} alt={role.roleName} />
                            <span>{role.roleName}</span>
                        </div>
                    )}
                </div>

                <div className="agent-card-main-panel">
                    <h2 className="agent-card-big-name">{agent.agentName}</h2>
                    <p className="agent-card-biography">{agent.description}</p>
                </div>

                <div className="agent-card-abilities-panel">
                    <h3 className="agent-card-panel-label">TACTICAL_ABILITIES</h3>
                    <div className="agent-card-abilities-list">
                        {agent.abilities.map((ability) => (
                            <div className="agent-card-ability-hex" key={ability.abilityId} title={ability.abilityName}>
                                <img src={ability.icon} alt={ability.abilityName} />
                                <div className="ability-hover-info">
                                    <strong>{ability.abilityName}</strong>
                                    <p>{ability.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Tactical HUD accents */}
            <div className="card-hud-corner tl" />
            <div className="card-hud-corner tr" />
            <div className="card-hud-corner bl" />
            <div className="card-hud-corner br" />
        </div>
    )
}

export default AgentCard