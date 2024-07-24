import { format } from 'date-fns'
import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'
import { useState } from 'react'
import { DateRange, DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { Button } from '../../../components/button'
import { Modal } from '../../../components/modal'

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  changeGuestsInput: () => void
  eventStartAndEndDates: DateRange | undefined
  setDestination: (destination: string) => void
  setEventStartAndEndDates: (dates: DateRange | undefined) => void
}

export function DestinationAndDateStep({
  setDestination,
  isGuestsInputOpen,
  changeGuestsInput,
  eventStartAndEndDates,
  setEventStartAndEndDates
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  function changeDatePicker() {
    setIsDatePickerOpen(!isDatePickerOpen)
  }

  const displayedDates =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, "d' de 'LLL")
          .concat(' até ')
          .concat(format(eventStartAndEndDates.to, "d' de 'LLL"))
      : null

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
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
        className="flex items-center gap-2 text-left w-[240px]"
      >
        <Calendar className="text-zinc-400 size-5" />
        <span className="text-lg text-zinc-400 flex-1">
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
