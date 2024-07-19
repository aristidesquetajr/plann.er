import { CircleDashed, UserCog } from 'lucide-react'
import { Button } from '../../components/button'

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Etiandro Garcia
            </span>
            <span className="block text-sm text-zinc-400">
              etiandro.garcia@gmail.com
            </span>
          </div>
          <CircleDashed className="size-5 text-zinc-400 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Herlander José
            </span>
            <span className="block text-sm text-zinc-400">
              herlander.jose@outlook.pt
            </span>
          </div>
          <CircleDashed className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>

      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  )
}
