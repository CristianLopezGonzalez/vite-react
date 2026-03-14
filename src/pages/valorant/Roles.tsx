import NavbarValorant from '../../components/valorant/NavbarValorant'
import RoleCard from '../../components/valorant/RoleCard'
import useRoles from '../../hooks/useRoles'
import useAgents from '../../hooks/useAgents'
import { Agent } from '../../api/agents'
import './Roles.css'

const Roles = () => {
    const { roles, loading: loadingRoles } = useRoles()
    const { agents, loading: loadingAgents } = useAgents()

    const loading = loadingRoles || loadingAgents

    const agentsByRole = agents.reduce((acc, agent) => {
        if (!acc[agent.roleId]) acc[agent.roleId] = []
        acc[agent.roleId].push(agent)
        return acc
    }, {} as Record<number, Agent[]>)

    return (
        <>
            <NavbarValorant />
            <main className="roles-page">
                <div className="roles-header">
                    <h1 className="roles-title">Roles</h1>
                    <span className="roles-count">
            {!loading ? `${roles.length} roles` : '—'}
          </span>
                </div>

                {loading ? (
                    <div className="roles-loading">
                        <span>Loading...</span>
                    </div>
                ) : (
                    <div className="roles-grid">
                        {roles.map(role => (
                            <RoleCard
                                key={role.roleId}
                                role={role}
                                agents={agentsByRole[role.roleId] || []}
                            />
                        ))}
                    </div>
                )}
            </main>
        </>
    )
}

export default Roles