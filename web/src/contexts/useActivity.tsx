import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import { useParams } from 'react-router-dom'
import { Activity } from '../interfaces/activity'
import { api } from '../lib/axios'

interface ActivityProviderProps {
  children: ReactNode
}

interface ActivityContextData {
  activities: Activity[]
  createActivity: (title: string, occurs_at: string) => Promise<void>
}

const ActivityContext = createContext<ActivityContextData>(
  {} as ActivityContextData
)

export function ActivityProvider({ children }: ActivityProviderProps) {
  const { tripId } = useParams()
  const [activities, setActivities] = useState<Activity[]>([])

  const getActivities = useCallback(() => {
    api
      .get(`/trips/${tripId}/activities`)
      .then(({ data }) => setActivities(data.activities))
  }, [])

  async function createActivity(title: string, occurs_at: string) {
    await api.post(`/trips/${tripId}/activities`, { title, occurs_at })
    getActivities()
  }

  useEffect(() => getActivities(), [tripId])

  return (
    <ActivityContext.Provider value={{ activities, createActivity }}>
      {children}
    </ActivityContext.Provider>
  )
}

export const useActivity = () => useContext(ActivityContext)
