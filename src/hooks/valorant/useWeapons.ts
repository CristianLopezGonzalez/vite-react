import { useQuery } from '@tanstack/react-query'
import { getAllWeapons } from '../../api/valorant/weapons.ts'

const useWeapons = () => {
    return useQuery({
        queryKey: ['weapons'],
        queryFn: getAllWeapons,
    })
}

export default useWeapons