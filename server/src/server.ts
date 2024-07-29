import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler
} from 'fastify-type-provider-zod'

import cors from '@fastify/cors'
import { routes } from './routes'

const app = fastify()

app.register(cors, {
  origin: `${process.env.WEB_BASE_URL}`
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(routes)

app
  .listen({ port: Number(process.env.PORT) })
  .then(() => console.log('Server running'))
