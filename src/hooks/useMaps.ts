import { useState, useEffect } from 'react'
import { getAllMaps, Map } from '../api/maps'

const useMaps = () => {
    const [maps, setMaps] = useState<Map[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchMaps = async () => {
            try {
                const data = await getAllMaps()
                setMaps(data)
            } catch (e) {
                const error = e as Error
                setError('Error loading maps: ' + error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchMaps()
    }, [])

    return { maps, loading, error }
}

export default useMaps