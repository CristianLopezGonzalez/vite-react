import {Agent} from '../../api/agents'
import {Role} from '../../api/roles'
import './AgentCard.css'

interface AgentCardProps {
    agent: Agent
    role?: Role
}

const AgentCard = ({agent, role}: AgentCardProps) => {
    return (
        <div className="agent-card">
            <div className="agent-card-image">
                <div className="agent-card-image-bg"/>
                <img src={agent.icon} alt={agent.agentName} loading="lazy"/>
                <div className="agent-card-image-overlay"/>
            </div>

            <div className="agent-card-content">
                <div className="agent-card-top">
                    <div className="agent-card-meta">
            <span className="agent-card-number">
              {String(agent.agentNumber).padStart(2, '0')}
            </span>
                        <span className="agent-card-race">{agent.race}</span>
                    </div>
                    {role && (
                        <div className="agent-card-role">
                            <img src={role.icon} alt={role.roleName} loading="lazy"/>
                            <span>{role.roleName}</span>
                        </div>
                    )}
                </div>

                <div className="agent-card-name-block">
                    <h2 className="agent-card-name">{agent.agentName}</h2>
                    <p className="agent-card-desc">{agent.description}</p>
                </div>

                <div className="agent-card-divider"/>

                <div className="agent-card-abilities">
                    <span className="agent-card-abilities-label">Abilities</span>
                    <div className="agent-card-abilities-grid">
                        {agent.abilities.map((ability) => (
                            <div className="agent-card-ability" key={ability.abilityId}>
                                <div className="agent-card-ability-icon">
                                    <img src={ability.icon} alt={ability.abilityName} loading="lazy"/>
                                </div>
                                <div className="agent-card-ability-info">
                                    <span className="agent-card-ability-name">{ability.abilityName}</span>
                                    <p className="agent-card-ability-desc">{ability.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgentCard