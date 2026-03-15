import { useQuery } from '@tanstack/react-query'
import { getAllAgents } from '../api/agents'

const useAgents = () => {
    return useQuery({
        queryKey: ['agents'],
        queryFn: getAllAgents,
    })
}

export default useAgents