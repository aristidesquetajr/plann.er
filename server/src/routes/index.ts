import { FastifyInstance } from 'fastify'
import { createTrip } from './create-trip'

export async function routes(app: FastifyInstance) {
  app.register(createTrip)
}
