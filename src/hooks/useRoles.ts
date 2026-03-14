import { useState, useEffect } from 'react'
import { getRoles, Role } from '../api/roles'

const useRoles = () => {
    const [roles, setRoles] = useState<Role[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const data = await getRoles()
                setRoles(data)
            } catch (e) {
            const error = e as Error
            setError('Error al cargar los roles: ' + error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchRoles()
    }, [])

    return { roles, loading, error }
}

export default useRoles