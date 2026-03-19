import { useQuery } from '@tanstack/react-query'
import { getAllRunnersWithAbilities } from '../../api/marathon/runnersWithAbilities.ts'

const useRunnersWithAbilities = () => {
    return useQuery({
        queryKey: ['marathon-runners-with-abilities'],
        queryFn: getAllRunnersWithAbilities,
    })
}

export default useRunnersWithAbilities
