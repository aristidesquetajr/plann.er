import fastify from 'fastify'

const app = fastify()

app.get('/', () => {
  return 'Hello NLW JOURNEY - Plann.er'
})

app
  .listen({ port: Number(process.env.PORT) })
  .then(() => console.log('Server running'))
