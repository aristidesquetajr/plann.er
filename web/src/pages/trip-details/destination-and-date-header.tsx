import { format } from 'date-fns'
import { Calendar, MapPin, Settings2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/button'
import { Trip } from '../../interfaces/trip'
import { api } from '../../lib/axios'

export function DestinationAndDateHeader() {
  const { tripId } = useParams()
  const [trip, setTrip] = useState<Trip>()

  useEffect(() => {
    api.get(`/trips/${tripId}`).then(({ data }) => setTrip(data.trip))
  }, [tripId])

  const displayedDates =
    trip &&
    format(trip.starts_at, "d' de 'LLL")
      .concat(' até ')
      .concat(format(trip.ends_at, "d' de 'LLL"))

  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100">{trip?.destination}</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100">{displayedDates}</span>
        </div>

        <div className="w-px h-6 bg-zinc-800" />

        <Button variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  )
}
