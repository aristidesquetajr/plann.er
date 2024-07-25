import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CircleCheck } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Activity } from '../../interfaces/activity'
import { api } from '../../lib/axios'

export function Activities() {
  const { tripId } = useParams()
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    api
      .get(`/trips/${tripId}/activities`)
      .then(({ data }) => setActivities(data.activities))
  }, [tripId])

  return (
    <div className="space-y-8">
      {activities.map((activity) => (
        <div key={activity.date} className="space-y-2.5">
          <div className="flex gap-2 items-baseline">
            <span className="text-xl text-zinc-300 font-semibold">
              Dia {format(activity.date, 'd')}
            </span>
            <span className="text-xs text-zinc-500 capitalize">
              {format(activity.date, 'EEEE', { locale: ptBR })}
            </span>
          </div>

          {!activity.activities.length ? (
            <p className="text-zinc-500 text-sm">
              Nenhuma atividade cadastrada nessa data.
            </p>
          ) : (
            <div className='space-y-2'>
              {activity.activities.map(({ id, title, occurs_at }) => (
                <div key={id} className="space-y-2.5">
                  <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                    <CircleCheck className="size-5 text-lime-300" />
                    <span className="text-zinc-100">{title}</span>
                    <span className="text-sinc-400 text-sm ml-auto">
                      {format(occurs_at, 'HH:mm')}h
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
