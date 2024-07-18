import { MapPin, Calendar, Settings2 } from 'lucide-react'

export function DestinationAndDateHeader() {
  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100">Luanda, Angola</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100">08 a 11 de Julho</span>
        </div>

        <div className="w-px h-6 bg-zinc-800" />
        <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
          Alterar local/data
          <Settings2 className="size-5" />
        </button>
      </div>
    </div>
  )
}
