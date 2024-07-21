import { Calendar, Tag } from 'lucide-react'
import { Button } from '../../components/button'
import { Modal } from '../../components/modal'

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}

export function CreateActivityModal({
  closeCreateActivityModal
}: CreateActivityModalProps) {
  return (
    <Modal
      title="Cadastrar atividade"
      paragraph={'Todos convidados podem visualizar as atividades'}
      closeModal={closeCreateActivityModal}
    >
      <form className="space-y-3">
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
            name=""
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
