import api from '../axios.ts'

export interface MarathonAbility {
    abilityId: number
    abilityName: string
    description: string
    type: string
    icon: string
    runnerId: number
    runner: {
        runnerId: number
        runnerName: string
        description: string
        Model: string
        icon: string
    }
}

const getAllAbilities = async (): Promise<MarathonAbility[]> => {
    try {
        const response = await api.get('/marathon/abilities');
        return response.data?.data || [];
    } catch (e) {
        return [];
    }
}

export { getAllAbilities };
