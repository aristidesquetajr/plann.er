import { AtSign, User } from 'lucide-react'
import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/button'
import { Modal } from '../../components/modal'
import { useTrip } from '../../contexts/useTrip'

interface ConfirmTripModalProps {
  closeTripModal: () => void
}

export function ConfirmTripModal({ closeTripModal }: ConfirmTripModalProps) {
  const navigate = useNavigate()
  const { setOwnerName, setOwnerEmail, createTrip } = useTrip()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const tripId = await createTrip()

    navigate(`/trips/${tripId}`)
  }
  return (
    <Modal
      title="Confirmar criação de viagem"
      paragraph={<Paragraph />}
      closeModal={closeTripModal}
    >
      <form onSubmit={onSubmit} className="space-y-3">
        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <User className="text-zinc-400 size-5" />
          <input
            name="name"
            placeholder="Seu nome completo"
            onChange={({ target }) => setOwnerName(target.value)}
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>

        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <AtSign className="text-zinc-400 size-5" />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail pessoal"
            onChange={({ target }) => setOwnerEmail(target.value)}
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>

        <Button type="submit" size="full">
          Confirmar criação da viagem
        </Button>
      </form>
    </Modal>
  )
}

function Paragraph() {
  const { destination, displayedDates } = useTrip()

  return (
    <>
      Para confirmar a criação de viagem para{' '}
      <span className="font-semibold text-zinc-100">{destination}</span> nas
      datas de{' '}
      <span className="font-semibold text-zinc-100">{displayedDates}</span>{' '}
      preencha seus dados abaixo:
    </>
  )
}
