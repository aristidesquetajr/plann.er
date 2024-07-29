import { FastifyInstance } from 'fastify'
import { confirmTrip } from './confirm-trip'
import { createTrip } from './create-trip'

export async function routes(app: FastifyInstance) {
  app.register(createTrip)
  app.register(confirmTrip)
}
