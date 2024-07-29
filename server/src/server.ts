import fastify from 'fastify'
import { routes } from './routes'
import {
  serializerCompiler,
  validatorCompiler
} from 'fastify-type-provider-zod'

const app = fastify()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(routes)

app
  .listen({ port: Number(process.env.PORT) })
  .then(() => console.log('Server running'))
