import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Calendar, MapPin, Settings2 } from 'lucide-react'
import { Button } from '../../components/button'
import { useTrip } from '../../contexts/useTrip'

export function DestinationAndDateHeader() {
  const { trip } = useTrip()

  const displayedDates =
    trip &&
    format(trip.starts_at, "d' de 'LLLL", { locale: ptBR })
      .concat(' até ')
      .concat(format(trip.ends_at, "d' de 'LLLL", { locale: ptBR }))

  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100 truncate">{trip?.destination}</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100 truncate max-sm:hidden">{displayedDates}</span>
        </div>

        <div className="w-px h-6 bg-zinc-800" />

        <Button variant="secondary">
          <span className="max-sm:hidden">Alterar local/data</span>
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  )
}
