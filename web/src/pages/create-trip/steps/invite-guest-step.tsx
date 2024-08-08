import { ArrowRight, UserRoundPlus } from 'lucide-react'
import { Button } from '../../../components/button'
import { useTrip } from '../../../contexts/useTrip'

interface InviteGuestStepProps {
  changeTripModal: () => void
  changeGuestsModal: () => void
}

export function InviteGuestStep({
  changeTripModal,
  changeGuestsModal
}: InviteGuestStepProps) {
  const { emailsToInvite } = useTrip()
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button
        type="button"
        onClick={changeGuestsModal}
        className="flex items-center gap-2 flex-1 text-left"
      >
        <UserRoundPlus className="text-zinc-400 size-5" />
        {emailsToInvite.length ? (
          <span className="text-zinc-100 text-lg flex-1">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="text-zinc-400 text-lg flex-1">
            Quem estará na viagem?
          </span>
        )}
      </button>

      <Button onClick={changeTripModal}>
        Confirmar viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  )
}
