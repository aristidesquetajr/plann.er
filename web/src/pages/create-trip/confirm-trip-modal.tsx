import { AtSign, User } from 'lucide-react'
import { FormEvent } from 'react'
import { Button } from '../../components/button'
import { Modal } from '../../components/modal'

interface ConfirmTripModalProps {
  closeTripModal: () => void
  setOwnerName: (ownerName: string) => void
  setOwnerEmail: (ownerEmail: string) => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({
  createTrip,
  setOwnerName,
  setOwnerEmail,
  closeTripModal
}: ConfirmTripModalProps) {
  return (
    <Modal
      title="Confirmar criação de viagem"
      paragraph={<Paragraph />}
      closeModal={closeTripModal}
    >
      <form onSubmit={createTrip} className="space-y-3">
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
  return (
    <>
      Para confirmar a criação de viagem para{' '}
      <span className="font-semibold text-zinc-100">Luanda, Angola</span> nas
      datas de{' '}
      <span className="font-semibold text-zinc-100">
        08 a 11 de Julho de 2024
      </span>{' '}
      preencha seus dados abaixo:
    </>
  )
}
