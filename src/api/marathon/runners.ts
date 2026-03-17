import api from '../axios.ts'

export interface MarathonRunners {
    runnerId:number
    runnerName:string
    description:string
    model:string
    icon:string
}

const getAllRunners = async ():Promise<MarathonRunners> => {
    const response = await api.get('/marathon/runners');
    return response.data.data;
}

export { getAllRunners };