import api from '../axios.ts'

export interface MarathonWeapons {
    weaponId:number
    description:string
    type:string
    fireRate:number
    magazine:number
    headDamage:number
    bodyDamage:number
    legDamage:number
    icon:string
}

const getAllWeapons = async ():Promise<MarathonWeapons[]> => {
    try {
        const response = await api.get('/marathon/weapons');
        return response.data?.data || [];
    } catch (e) {
        return [];
    }
}

export { getAllWeapons };