import NavbarValorant from '../../components/valorant/NavbarValorant'
import RoleCard from '../../components/valorant/RoleCard'
import useRoles from '../../hooks/valorant/useRoles.ts'
import useAgents from '../../hooks/valorant/useAgents.ts'
import { Agent } from '../../api/valorant/agents.ts'
import './Roles.css'

const Roles = () => {
    const { data: roles = [], isLoading: loadingRoles, error: errorRoles } = useRoles()
    const { data: agents = [], isLoading: loadingAgents } = useAgents()

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
                    <div className="roles-grid">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="role-skeleton" />
                        ))}
                    </div>
                ) : errorRoles ? (
                    <div className="roles-error-container">
                        <span className="v-error-icon">⚠</span>
                        <div className="v-error-info">
                            <span className="v-error-title">PROTOCOL_ERROR</span>
                            <p className="v-error-text">Unable to initialize role manifests. Biometric interface required.</p>
                        </div>
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