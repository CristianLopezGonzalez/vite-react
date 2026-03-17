import { useQuery } from '@tanstack/react-query'
import { getAllRoles } from '../../api/valorant/roles.ts'

const useRoles = () => {
    return useQuery({
        queryKey: ['roles'],
        queryFn: getAllRoles,
    })
}

export default useRoles