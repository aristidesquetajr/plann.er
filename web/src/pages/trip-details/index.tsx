import {
  Calendar,
  CircleCheck,
  CircleDashed,
  Link2,
  MapPin,
  Plus,
  Settings2,
  UserCog
} from 'lucide-react'

export function TripDetails() {
  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
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

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
              <Plus />
              Cadastrar atividade
            </button>
          </div>

          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">
                  Dia 08
                </span>
                <span className="text-xs text-zinc-500">Quinta-feira</span>
              </div>
              <p className="text-zinc-500 text-sm">
                Nenhuma atividade cadastrada nessa data.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">
                  Dia 09
                </span>
                <span className="text-xs text-zinc-500">Sexta-feira</span>
              </div>
              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="text-sinc-400 text-sm ml-auto">08:00</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Coding</span>
                  <span className="text-sinc-400 text-sm ml-auto">09:45</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 space-y-6">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Links importantes</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    Reserva AirBnB
                  </span>
                  <a
                    href="#"
                    className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
                  >
                    https://www.airbnb.com.br/rooms/1047000110987654345678987654567098765560
                  </a>
                </div>
                <Link2 className="size-5 text-zinc-400 shrink-0" />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    Reserva AirBnB
                  </span>
                  <a
                    href="#"
                    className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
                  >
                    https://www.airbnb.com.br/rooms/1047000110987654345678987654567098765560
                  </a>
                </div>
                <Link2 className="size-5 text-zinc-400 shrink-0" />
              </div>
            </div>

            <button className="bg-zinc-800 w-full text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700">
              <Plus className="size-5" />
              Cadastrar novo link
            </button>
          </div>

          <div className="w-full h-px bg-zinc-800" />

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
            <button className="bg-zinc-800 w-full text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700">
              <UserCog className="size-5" />
              Gerenciar convidados
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
