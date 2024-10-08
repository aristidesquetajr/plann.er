import { Plus } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../../components/button'
import { ActivityProvider } from '../../contexts/useActivity'
import { LinkProvider } from '../../contexts/useLink'
import { ParticipantProvider } from '../../contexts/useParticipant'
import { Activities } from './activities'
import { CreateActivityModal } from './create-activity-modal'
import { DestinationAndDateHeader } from './destination-and-date-header'
import { Guests } from './guests'
import { ImportantLinks } from './important-links'

export function TripDetails() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false)

  function changeCreateActivityModal() {
    setIsCreateActivityModalOpen(!isCreateActivityModalOpen)
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-4 max-[900px]:flex-col">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <Button onClick={changeCreateActivityModal}>
              <Plus />
              <span className="max-sm:hidden">Cadastrar atividade</span>
            </Button>
          </div>

          <ActivityProvider>
            <Activities />

            {isCreateActivityModalOpen && (
              <CreateActivityModal
                closeCreateActivityModal={changeCreateActivityModal}
              />
            )}
          </ActivityProvider>
        </div>

        <div className="w-80 space-y-6 max-[900px]:w-full">
          <LinkProvider>
            <ImportantLinks />
          </LinkProvider>

          <div className="w-full h-px bg-zinc-800" />

          <ParticipantProvider>
            <Guests />
          </ParticipantProvider>
        </div>
      </main>
    </div>
  )
}
