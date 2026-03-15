import {Role} from '../../api/roles'
import {Agent} from '../../api/agents'
import './RoleCard.css'

interface RoleCardProps {
    role: Role
    agents: Agent[]
}

const RoleCard = ({role, agents}: RoleCardProps) => {
    return (
        <div className="role-card">
            <div className="role-card-header">
                <div className="role-card-icon-wrapper">
                    <div className="role-card-icon-ring"/>
                    <img src={role.icon} alt={role.roleName} className="role-card-icon" loading="lazy"/>
                </div>
                <div className="role-card-info">
                    <h2 className="role-card-name">{role.roleName}</h2>
                    <p className="role-card-desc">{role.description}</p>
                </div>
            </div>

            <div className="role-card-divider"/>

            <div className="role-card-agents">
        <span className="role-card-agents-label">
          {agents.length} Agents
        </span>
                <div className="role-card-agents-grid">
                    {agents.map(agent => (
                        <div className="role-card-agent" key={agent.agentId}>
                            <div className="role-card-agent-img">
                                <img src={agent.icon} alt={agent.agentName} loading="lazy"/>
                            </div>
                            <span className="role-card-agent-name">{agent.agentName}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RoleCard