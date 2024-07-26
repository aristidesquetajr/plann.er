import fastify from 'fastify'
import { prisma } from './lib/prisma'

const app = fastify()

app.get('/', () => {
  return 'Hello NLW JOURNEY - Plann.er'
})

app.post('/cadastrar', async () => {
  const trip = await prisma.trip.create({
    data: {
      destination: 'Kilamba',
      starts_at: new Date(),
      ends_at: new Date()
    }
  })
})

app.get('/listar', async () => {
  const trips = await prisma.trip.findMany()

  return trips
})

app
  .listen({ port: Number(process.env.PORT) })
  .then(() => console.log('Server running'))
