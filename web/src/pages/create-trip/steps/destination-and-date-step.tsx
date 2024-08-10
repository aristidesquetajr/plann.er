import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'
import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { Button } from '../../../components/button'
import { Modal } from '../../../components/modal'
import { useTrip } from '../../../contexts/useTrip'

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  changeGuestsInput: () => void
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  changeGuestsInput
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const {
    setDestination,
    eventStartAndEndDates,
    setEventStartAndEndDates,
    displayedDates
  } = useTrip()

  function changeDatePicker() {
    setIsDatePickerOpen(!isDatePickerOpen)
  }

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3 max-sm:h-48 max-sm:p-4 max-sm:flex-col max-sm:items-stretch">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="text-zinc-400 size-5" />
        <input
          type="text"
          disabled={isGuestsInputOpen}
          placeholder="Para onde você vai?"
          onChange={({ target }) => setDestination(target.value)}
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
        />
      </div>

      <button
        onClick={changeDatePicker}
        disabled={isGuestsInputOpen}
        className="flex items-center gap-2 text-left sm:w-[240px]"
      >
        <Calendar className="text-zinc-400 size-5" />
        <span className="text-lg text-zinc-400 flex-1 truncate">
          {displayedDates || 'Quando?'}
        </span>
      </button>

      {isDatePickerOpen && (
        <Modal
          variant="smaller"
          title="Selecione a data"
          closeModal={changeDatePicker}
        >
          <DayPicker
            mode="range"
            selected={eventStartAndEndDates}
            onSelect={setEventStartAndEndDates}
          />
        </Modal>
      )}

      <div className="w-px h-6 bg-zinc-800 max-sm:w-full max-sm:h-px" />

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
