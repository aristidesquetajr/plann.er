import { Mail, Plus } from 'lucide-react'
import { Button } from '../../components/button'
import { Modal } from '../../components/modal'
import { useParticipant } from '../../contexts/useParticipant'
import { FormEvent } from 'react'

interface InviteGuestModalProps {
  closeInviteGuestModal: () => void
}

export function InviteGuestModal({
  closeInviteGuestModal
}: InviteGuestModalProps) {
  const { inviteGuest } = useParticipant()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    const email = data.get('email')?.toString()

    if (!email) return

    await inviteGuest(email)

    closeInviteGuestModal()
    form.reset()
  }

  return (
    <Modal
      title="Convidar participante"
      paragraph="O convidado ira receber e-mail para confirmar a participação na viagem"
      closeModal={closeInviteGuestModal}
    >
      <form className="space-y-3" onSubmit={onSubmit}>
        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <Mail className="text-zinc-400 size-5" />
          <input
            type="email"
            name="email"
            placeholder="Digite o e-mail do convidado"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>

        <Button type="submit" size="full">
          Convidar
          <Plus className="size-5" />
        </Button>
      </form>
    </Modal>
  )
}
