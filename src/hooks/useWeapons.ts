import { useQuery } from '@tanstack/react-query'
import { getAllWeapons } from '../api/weapons'

const useWeapons = () => {
    return useQuery({
        queryKey: ['weapons'],
        queryFn: getAllWeapons,
    })
}

export default useWeapons