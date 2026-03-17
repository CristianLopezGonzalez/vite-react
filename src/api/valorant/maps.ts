import api from '../axios.ts'

export interface Map {
    mapId: number
    mapName: string
    spikeSites: string
    icon: string
    miniMap: string
}

const getAllMaps = async (): Promise<Map[]> => {
    const response = await api.get('/valorant/maps')
    return response.data.data
}

const getMapById = async (id: number): Promise<Map> => {
    const response = await api.get(`/valorant/maps/${id}`)
    return response.data.data
}

export { getAllMaps, getMapById }