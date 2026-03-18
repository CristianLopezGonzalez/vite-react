import api from '../axios.ts'

export interface MarathonRunners {
    runnerId:number
    runnerName:string
    description:string
    model:string
    icon:string
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