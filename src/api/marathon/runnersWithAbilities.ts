import api from '../axios.ts'
import { getAllAbilities } from './runnerAbilities.ts'
import type { MarathonRunners } from './runners.ts'

const getAllRunnersWithAbilities = async (): Promise<MarathonRunners[]> => {
    try {
        const [runnersRes, abilities] = await Promise.all([
            api.get('/marathon/runners'),
            getAllAbilities()
        ])
        const runners: MarathonRunners[] = runnersRes.data?.data || []

        // Group abilities by runnerId
        const abilityMap: Record<number, typeof abilities> = {}
        for (const a of abilities) {
            if (!abilityMap[a.runnerId]) abilityMap[a.runnerId] = []
            abilityMap[a.runnerId].push(a)
        }

        // Attach abilities to each runner
        return runners.map(r => ({
            ...r,
            abilities: abilityMap[r.runnerId] ?? []
        }))
    } catch {
        return []
    }
}

export { getAllRunnersWithAbilities }
