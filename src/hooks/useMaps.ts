import { useQuery } from '@tanstack/react-query'
import { getAllMaps } from '../api/maps'

const useMaps = () => {
    return useQuery({
        queryKey: ['maps'],
        queryFn: getAllMaps,
    })
}

export default useMaps