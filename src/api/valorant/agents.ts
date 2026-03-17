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
}

const getAllAgents = async (): Promise<Agent[]> => {
    const response = await api.get('/valorant/agents');
    return response.data.data;
}

export {getAllAgents}