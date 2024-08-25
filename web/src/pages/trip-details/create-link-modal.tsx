import { Link2, Tag } from 'lucide-react'
import { FormEvent } from 'react'
import { Button } from '../../components/button'
import { Modal } from '../../components/modal'
import { useLink } from '../../contexts/useLink'

interface CreateLinkModalProps {
  closeCreateLinkModal: () => void
}

export function CreateLinkModal({
  closeCreateLinkModal
}: CreateLinkModalProps) {
  const { createLink } = useLink()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    const title = data.get('title')?.toString()
    const url = data.get('url')?.toString()

    if (!title || !url) return

    await createLink(title, url)

    closeCreateLinkModal()
    form.reset()
  }
  return (
    <Modal
      title="Cadastrar link"
      paragraph="Todos convidados podem vizualizar os links importantes"
      closeModal={closeCreateLinkModal}
    >
      <form onSubmit={onSubmit} className="space-y-3">
        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <Tag className="size-5 text-zinc-400" />
          <input
            name="title"
            placeholder="Título do link"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>

        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <Link2 className="size-5 text-zinc-400" />
          <input
            type="url"
            name="url"
            placeholder="URL"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>

        <Button type="submit" size="full">
          Salvar link
        </Button>
      </form>
    </Modal>
  )
}
