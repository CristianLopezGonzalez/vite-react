import api from '../axios.ts'

export interface Role {
    roleId: number
    roleName: string
    description: string
    icon: string
}

const getAllRoles = async (): Promise<Role[]> => {
    const response = await api.get('/valorant/roles')
    return response.data.data
}

const getRoleById = async (id: number): Promise<Role> => {
    const response = await api.get(`/valorant/roles/${id}`)
    return response.data.data
}

export { getAllRoles, getRoleById }