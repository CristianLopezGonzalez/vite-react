import api from '../axios.ts'

export interface Ability {
    abilityId: number
    abilityName: string
    description: string
    icon: string
    agentId: number
}

export interface Agent {
    agentId: number
    agentName: string
    description: string
    agentNumber: number
    race: string
    icon: string
    roleId: number
    abilities: Ability[]
    fullPortrait?: string // Added for accordion
}

const getAllAgents = async (): Promise<Agent[]> => {
    try {
        const response = await api.get('/valorant/agents');
        return response.data?.data || [];
    } catch (e) {
        return [];
    }
}

export {getAllAgents}