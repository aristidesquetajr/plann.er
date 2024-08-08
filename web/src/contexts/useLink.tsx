import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import { Link } from '../interfaces/link'
import { useParams } from 'react-router-dom'
import { api } from '../lib/axios'

interface LinkProviderProps {
  children: ReactNode
}

interface LinkContextData {
  links: Link[]
}

const LinkContext = createContext<LinkContextData>({} as LinkContextData)

export function LinkProvider({ children }: LinkProviderProps) {
  const { tripId } = useParams()
  const [links, setLinks] = useState<Link[]>([])

  const getLinks = useCallback(() => {
    api.get(`/trips/${tripId}/links`).then(({ data }) => setLinks(data.links))
  }, [])

  useEffect(() => getLinks(), [tripId])

  return (
    <LinkContext.Provider value={{ links }}>{children}</LinkContext.Provider>
  )
}

export const useLink = () => useContext(LinkContext)
