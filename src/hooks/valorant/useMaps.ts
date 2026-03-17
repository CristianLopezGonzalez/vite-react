import { useQuery } from '@tanstack/react-query'
import { getAllMaps } from '../../api/valorant/maps.ts'

const useMaps = () => {
    return useQuery({
        queryKey: ['maps'],
        queryFn: getAllMaps,
    })
}

export default useMaps