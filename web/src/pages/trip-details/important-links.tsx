import { Link2, Plus } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../../components/button'
import { useLink } from '../../contexts/useLink'
import { CreateLinkModal } from './create-link-modal'

export function ImportantLinks() {
  const { links } = useLink()
  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false)

  function changeCreateLinkModal() {
    setIsCreateLinkModalOpen(!isCreateLinkModalOpen)
  }

  return (
    <>
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Links importantes</h2>

        <div className="space-y-5">
          {links.map(({ id, title, url }) => (
            <div key={id} className="flex items-center justify-between gap-4">
              <div className="space-y-1.5">
                <span className="block font-medium text-zinc-100">{title}</span>
                <a
                  href={url}
                  target="_blank"
                  className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
                >
                  {url}
                </a>
              </div>
              <Link2 className="size-5 text-zinc-400 shrink-0" />
            </div>
          ))}
        </div>

        <Button variant="secondary" size="full" onClick={changeCreateLinkModal}>
          <Plus className="size-5" />
          Cadastrar novo link
        </Button>
      </div>

      {isCreateLinkModalOpen && (
        <CreateLinkModal closeCreateLinkModal={changeCreateLinkModal} />
      )}
    </>
  )
}
