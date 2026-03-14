import api from './axios'

export interface Role {
    roleId: number
    roleName: string
    description: string
    icon: string
}

const getRoles = async (): Promise<Role[]> => {
    const response = await api.get('/roles')
    return response.data.data
}

const getRoleById = async (id: number): Promise<Role> => {
    const response = await api.get(`/roles/${id}`)
    return response.data.data
}

export { getRoles, getRoleById }