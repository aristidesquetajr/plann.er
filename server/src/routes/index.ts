import { FastifyInstance } from 'fastify'
import { confirmParticipant } from './confirm-participant'
import { confirmTrip } from './confirm-trip'
import { createActivity } from './create-activity'
import { createInvite } from './create-invite'
import { createLink } from './create-link'
import { createTrip } from './create-trip'
import { getActivities } from './get-activities'
import { getLinks } from './get-links'
import { getParticipants } from './get-participants'

export async function routes(app: FastifyInstance) {
  app.register(createTrip)
  app.register(confirmTrip)
  app.register(confirmParticipant)
  app.register(createActivity)
  app.register(getActivities)
  app.register(createLink)
  app.register(getLinks)
  app.register(getParticipants)
  app.register(createInvite)
}
