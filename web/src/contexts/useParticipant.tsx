import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import { Participant } from '../interfaces/participant'
import { api } from '../lib/axios'
import { useParams } from 'react-router-dom'

interface ParticipantProviderProps {
  children: ReactNode
}

interface ParticipantContextData {
  participants: Participant[]
  inviteGuest: (email: string) => Promise<void>
}

const ParticipantContext = createContext<ParticipantContextData>(
  {} as ParticipantContextData
)

export function ParticipantProvider({ children }: ParticipantProviderProps) {
  const { tripId } = useParams()
  const [participants, setParticipants] = useState<Participant[]>([])

  const getParticipants = useCallback(() => {
    api
      .get(`/trips/${tripId}/participants`)
      .then(({ data }) => setParticipants(data.participants))
  }, [])

  async function inviteGuest(email: string) {
    await api.post(`/trips/${tripId}/invites`, { email })
    getParticipants()
  }

  useEffect(() => getParticipants(), [tripId])

  return (
    <ParticipantContext.Provider value={{ participants, inviteGuest }}>
      {children}
    </ParticipantContext.Provider>
  )
}

export const useParticipant = () => useContext(ParticipantContext)
