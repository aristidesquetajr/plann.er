import { Calendar, Tag } from 'lucide-react'
import { FormEvent } from 'react'
import { Button } from '../../components/button'
import { Modal } from '../../components/modal'
import { useActivity } from '../../contexts/useActivity'

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}

export function CreateActivityModal({
  closeCreateActivityModal
}: CreateActivityModalProps) {
  const { createActivity } = useActivity()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    const title = data.get('title')?.toString()
    const occurs_at = data.get('occurs_at')?.toString()

    if (!title || !occurs_at) return

    await createActivity(title, occurs_at)

    form.reset()
    closeCreateActivityModal()
  }

  return (
    <Modal
      title="Cadastrar atividade"
      paragraph={'Todos convidados podem visualizar as atividades'}
      closeModal={closeCreateActivityModal}
    >
      <form onSubmit={onSubmit} className="space-y-3">
        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <Tag className="size-5 text-zinc-400" />
          <input
            name="title"
            placeholder="Qual a atividade?"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>

        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 flex-1">
          <Calendar className="size-5 text-zinc-400" />
          <input
            type="datetime-local"
            name="occurs_at"
            placeholder="Data e horário da atividade"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>

        <Button type="submit" size="full">
          Salvar atividade
        </Button>
      </form>
    </Modal>
  )
}
