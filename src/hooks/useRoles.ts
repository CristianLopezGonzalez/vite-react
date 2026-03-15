import { useQuery } from '@tanstack/react-query'
import { getAllRoles } from '../api/roles'

const useRoles = () => {
    return useQuery({
        queryKey: ['roles'],
        queryFn: getAllRoles,
    })
}

export default useRoles