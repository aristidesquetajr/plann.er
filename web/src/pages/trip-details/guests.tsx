import { CheckCircle2, CircleDashed, UserCog } from 'lucide-react'
import { Button } from '../../components/button'
import { useParticipant } from '../../contexts/useParticipant'

export function Guests() {
  const { participants } = useParticipant()

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>
      <div className="space-y-5">
        {participants.map(({ id, name, email, is_confirmed }, index) => (
          <div key={id} className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                {name ?? `Convidado ${index}`}
              </span>
              <span className="block text-sm text-zinc-400">{email}</span>
            </div>
            {is_confirmed ? (
              <CheckCircle2 className="size-5 text-green-400 shrink-0" />
            ) : (
              <CircleDashed className="size-5 text-zinc-400 shrink-0" />
            )}
          </div>
        ))}
      </div>

      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  )
}
