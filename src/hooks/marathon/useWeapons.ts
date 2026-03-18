import { useQuery } from '@tanstack/react-query'
import { getAllWeapons } from '../../api/marathon/weapons.ts'

const useWeapons = () => {
    return useQuery({
        queryKey: ['marathon-weapons'],
        queryFn: getAllWeapons,
    })
}

export default useWeapons