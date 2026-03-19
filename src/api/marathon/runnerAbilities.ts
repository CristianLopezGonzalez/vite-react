import api from '../axios.ts'

export interface MarathonAbility {
    abilityId: number
    abilityName: string
    description: string
    cooldown: number
    type: string
    icon: string
    runnerId?: number
}

const getAllAbilities = async (): Promise<MarathonAbility[]> => {
    try {
        const response = await api.get('/marathon/runner-abilities');
        return response.data?.data || [];
    } catch (e) {
        return [];
    }
}

export { getAllAbilities };
