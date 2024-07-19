import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'
import { Button } from '../../../components/button'

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  changeGuestsInput: () => void
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  changeGuestsInput
}: DestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="text-zinc-400 size-5" />
        <input
          type="text"
          disabled={isGuestsInputOpen}
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="text-zinc-400 size-5" />
        <input
          type="text"
          disabled={isGuestsInputOpen}
          placeholder="Quando?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none w-40"
        />
      </div>

      <div className="w-px h-6 bg-zinc-800" />

      <Button
        onClick={changeGuestsInput}
        variant={!isGuestsInputOpen ? 'primary' : 'secondary'}
      >
        {!isGuestsInputOpen ? (
          <>
            Continuar
            <ArrowRight className="size-5" />
          </>
        ) : (
          <>
            Alterar local/data
            <Settings2 className="size-5" />
          </>
        )}
      </Button>
    </div>
  )
}
