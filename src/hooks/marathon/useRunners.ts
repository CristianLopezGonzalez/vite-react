import { useQuery } from '@tanstack/react-query'
import { getAllRunners } from '../../api/marathon/runners.ts'

const useRunners = () => {
    return useQuery({
        queryKey: ['marathon-runners'],
        queryFn: getAllRunners,
    })
}

export default useRunners
