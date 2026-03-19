import api from '../axios.ts'

export interface MarathonRunners {
    runnerId: number
    runnerName: string
    description: string
    model: string
    Model?: string
    icon: string
    abilities?: RunnerAbility[]
}

export interface RunnerAbility {
    abilityId: number
    abilityName: string
    description: string
    type: string
    icon: string
}

const getAllRunners = async ():Promise<MarathonRunners[]> => {
    try {
        const response = await api.get('/marathon/runners');
        return response.data?.data || [];
    } catch (e) {
        return [];
    }
}

export { getAllRunners };