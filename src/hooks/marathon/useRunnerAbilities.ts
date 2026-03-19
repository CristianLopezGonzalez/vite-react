import { useQuery } from '@tanstack/react-query'
import { getAllAbilities } from '../../api/marathon/runnerAbilities.ts'

const useRunnerAbilities = () => {
    return useQuery({
        queryKey: ['marathon-runner-abilities'],
        queryFn: getAllAbilities,
    })
}

export default useRunnerAbilities
