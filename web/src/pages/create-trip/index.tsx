import { useState } from 'react'
import { ConfirmTripModal } from './confirm-trip-modal'
import { InviteGuestsModal } from './invite-guests-modal'
import { DestinationAndDateStep } from './steps/destination-and-date-step'
import { InviteGuestStep } from './steps/invite-guest-step'

export function CreateTripPage() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  //#region Functions
  function changeGuestsInput() {
    setIsGuestsInputOpen(!isGuestsInputOpen)
  }

  function changeGuestsModal() {
    setIsGuestsModalOpen(!isGuestsModalOpen)
  }

  function changeTripModal() {
    setIsConfirmTripModalOpen(!isConfirmTripModalOpen)
  }
  //#endregion

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-center bg-no-repeat">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <DestinationAndDateStep
            isGuestsInputOpen={isGuestsInputOpen}
            changeGuestsInput={changeGuestsInput}
          />

          {isGuestsInputOpen && (
            <InviteGuestStep
              changeTripModal={changeTripModal}
              changeGuestsModal={changeGuestsModal}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{' '}
          <br />
          com nossos{' '}
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>{' '}
          e{' '}
          <a href="#" className="text-zinc-300 underline">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal closeGuestsModal={changeGuestsModal} />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal closeTripModal={changeTripModal} />
      )}
    </div>
  )
}
