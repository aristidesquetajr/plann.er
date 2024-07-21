import { AtSign, Plus, X } from 'lucide-react'
import { FormEvent } from 'react'
import { Button } from '../../components/button'
import { Modal } from '../../components/modal'

interface InviteGuestsModalProps {
  emailsToInvite: string[]
  closeGuestsModal: () => void
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
  removeEmailFromInvites: (email: string) => void
}

export function InviteGuestsModal({
  emailsToInvite,
  closeGuestsModal,
  addNewEmailToInvite,
  removeEmailFromInvites
}: InviteGuestsModalProps) {
  return (
    <Modal
      title="Selecionar convidados"
      closeModal={closeGuestsModal}
      paragraph={<Paragraph />}
    >
      <div className="flex flex-wrap gap-2">
        {emailsToInvite.map((email) => (
          <div
            key={email}
            className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
          >
            <span className="text-zinc-300">{email}</span>
            <button type="button" onClick={() => removeEmailFromInvites(email)}>
              <X className="size-4 text-zinc-400" />
            </button>
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-zinc-800" />

      <form
        onSubmit={addNewEmailToInvite}
        className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
      >
        <div className="px-2 flex items-center flex-1 gap-2">
          <AtSign className="text-zinc-400 size-5" />
          <input
            type="email"
            name="email"
            placeholder="Digite o e-mail do convidado"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>

        <Button type="submit">
          Convidar
          <Plus className="size-5" />
        </Button>
      </form>
    </Modal>
  )
}

function Paragraph() {
  return (
    <>
      Os convidados irão receber e-mails para confirmar a participação na viagem
    </>
  )
}
