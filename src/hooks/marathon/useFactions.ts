import { useQuery } from '@tanstack/react-query'
import { getAllFactions } from '../../api/marathon/factions.ts'

const useFactions = () => {
    return useQuery({
        queryKey: ['marathon-factions'],
        queryFn: getAllFactions,
    })
}

export default useFactions
