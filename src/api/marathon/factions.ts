import api from '../axios.ts'

export interface MarathonFaction {
    factionId: number
    factionName: string
    description: string
    leader: string
    icon: string
}

const getAllFactions = async (): Promise<MarathonFaction[]> => {
    try {
        const response = await api.get('/marathon/factions');
        return response.data?.data || [];
    } catch (e) {
        return [];
    }
}

export { getAllFactions };
