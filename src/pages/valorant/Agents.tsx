import NavbarValorant from '../../components/valorant/NavbarValorant'
import AgentCard from '../../components/valorant/AgentCard'
import useAgents from '../../hooks/valorant/useAgents.ts'
import useRoles from '../../hooks/valorant/useRoles.ts'
import {Role} from '../../api/valorant/roles.ts'
import './Agents.css'

const Agents = () => {
    const {data: agents = [], isLoading: loadingAgents, error: errorAgents} = useAgents()
    const {data: roles = [], isLoading: loadingRoles} = useRoles()

    const rolesMap = roles.reduce((acc, role) => {
        acc[role.roleId] = role
        return acc
    }, {} as Record<number, Role>)

    const loading = loadingAgents || loadingRoles

    if (errorAgents) return <div className="agents-error">Error al cargar los agentes</div>

    return (
        <>
            <NavbarValorant/>
            <main className="agents-page">
                <div className="agents-header">
                    <h1 className="agents-title">Agents</h1>
                    <span className="agents-count">
            {!loading ? `${agents.length} agents` : '—'}
          </span>
                </div>

                {loading ? (
                    <div className="agents-loading">
                        <span>Loading...</span>
                    </div>
                ) : (
                    <div className="agents-grid">
                        {agents.map((agent) => (
                            <AgentCard
                                key={agent.agentId}
                                agent={agent}
                                role={rolesMap[agent.roleId]}
                            />
                        ))}
                    </div>
                )}
            </main>
        </>
    )
}

export default Agents