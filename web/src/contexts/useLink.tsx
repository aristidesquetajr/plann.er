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
  createLink: (title: string, url: string) => Promise<void>
}

const LinkContext = createContext<LinkContextData>({} as LinkContextData)

export function LinkProvider({ children }: LinkProviderProps) {
  const { tripId } = useParams()
  const [links, setLinks] = useState<Link[]>([])

  const getLinks = useCallback(() => {
    api.get(`/trips/${tripId}/links`).then(({ data }) => setLinks(data.links))
  }, [])

  async function createLink(title: string, url: string) {
    await api.post(`/trips/${tripId}/links`, { title, url })
    getLinks()
  }

  useEffect(() => getLinks(), [tripId])

  return (
    <LinkContext.Provider value={{ links, createLink }}>
      {children}
    </LinkContext.Provider>
  )
}

export const useLink = () => useContext(LinkContext)
