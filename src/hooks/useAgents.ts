import { useState, useEffect } from 'react'
import {getAllAgents,Agent } from '../api/agents'

const useAgents = () => {
    const [agents, setAgents] = useState<Agent[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchAgents = async () => {
            try {
                const data = await getAllAgents()
                setAgents(data)
            } catch (e) {
                const error = e as Error
                setError('Error al cargar los roles: ' + error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchAgents()
    }, [])

    return { agents, loading, error }
}

export default useAgents