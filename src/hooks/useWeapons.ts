import { useState, useEffect } from 'react'
import { getAllWeapons, Weapon } from '../api/weapons'

const useWeapons = () => {
    const [weapons, setWeapons] = useState<Weapon[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchWeapons = async () => {
            try {
                const data = await getAllWeapons()
                setWeapons(data)
            } catch (e) {
                const error = e as Error
                setError('Error loading weapons: ' + error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchWeapons()
    }, [])

    return { weapons, loading, error }
}

export default useWeapons