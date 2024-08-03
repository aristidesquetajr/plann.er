import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler
} from 'fastify-type-provider-zod'

import cors from '@fastify/cors'
import { env } from './env'
import { errorHandler } from './error-handler'
import { routes } from './routes'

const app = fastify()

app.register(cors, {
  origin: env.WEB_BASE_URL
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.setErrorHandler(errorHandler)

app.register(routes)

app.listen({ port: env.PORT }).then(() => console.log('Server running'))
