import api from '../axios.ts'

export interface Weapon {
    weaponId: number
    icon: string
    weaponName: string
    description: string
    type: string
    fireMode: string
    fireRate: number
    reloadSpeed: number
    magazine: number
    headDamage: number
    bodyDamage: number
    legDamage: number
}

const getAllWeapons = async (): Promise<Weapon[]> => {
    const response = await api.get('/valorant/weapons')
    return response.data.data
}

const getWeaponById = async (id: number): Promise<Weapon> => {
    const response = await api.get(`/valorant/weapons/${id}`)
    return response.data.data
}

export { getAllWeapons, getWeaponById }