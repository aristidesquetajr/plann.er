import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'
import { DateRange } from 'react-day-picker'
import { useParams } from 'react-router-dom'
import { Trip } from '../interfaces/trip'
import { api } from '../lib/axios'

interface TripProviderProps {
  isFetchTrip?: boolean
  children: ReactNode
}

interface TripContextData {
  trip: Trip | undefined
  tripId: string | undefined
  destination: string
  setDestination: (destination: string) => void
  ownerName: string
  setOwnerName: (name: string) => void
  ownerEmail: string
  setOwnerEmail: (email: string) => void
  eventStartAndEndDates: DateRange | undefined
  setEventStartAndEndDates: (dates: DateRange | undefined) => void
  emailsToInvite: string[]
  setEmailsToInvite: (emailsToInvite: string[]) => void
  createTrip: () => Promise<string | undefined>
}

const TripContext = createContext<TripContextData>({} as TripContextData)

export function TripProvider({ children, isFetchTrip }: TripProviderProps) {
  const { tripId } = useParams()

  const [destination, setDestination] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [ownerEmail, setOwnerEmail] = useState('')
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >()
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

  const [trip, setTrip] = useState<Trip>()

  useEffect(() => {
    isFetchTrip &&
      api.get(`/trips/${tripId}`).then(({ data }) => setTrip(data.trip))
  }, [tripId])

  async function createTrip(): Promise<string | undefined> {
    if (!destination) return

    if (!eventStartAndEndDates?.from || !eventStartAndEndDates.to) return

    if (!emailsToInvite.length) return

    if (!ownerName || !ownerEmail) return

    const response = await api.post('/trips', {
      destination,
      starts_at: eventStartAndEndDates.from,
      ends_at: eventStartAndEndDates.to,
      emails_to_invite: emailsToInvite,
      owner_name: ownerName,
      owner_email: ownerEmail
    })

    const { tripId } = response.data

    return tripId
  }

  return (
    <TripContext.Provider
      value={{
        trip,
        tripId,
        destination,
        setDestination,
        ownerName,
        setOwnerName,
        ownerEmail,
        setOwnerEmail,
        eventStartAndEndDates,
        setEventStartAndEndDates,
        emailsToInvite,
        setEmailsToInvite,
        createTrip
      }}
    >
      {children}
    </TripContext.Provider>
  )
}

export function useTrip() {
  const context = useContext(TripContext)

  return context
}
