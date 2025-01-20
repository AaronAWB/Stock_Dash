import fastify from 'fastify';
import fastifyEnv from '@fastify/env'
import prismaPlugin from './plugins/prisma';
import userRoutes from './routes/users';
import authRoutes from './routes/auth'
import fastifyCookie from 'fastify-cookie'

const app = fastify({ logger: true });

const envSchema = {
    type: 'object',
    required: ['DATABASE_URL'],
    properties: {
        DATABASE_URL: { type: 'string' },
    },
  };

app.register(fastifyCookie)
app.register(fastifyEnv, {
    schema: envSchema,
    dotenv: true
})
app.register(prismaPlugin);
app.register(userRoutes, { prefix: '/api' });
app.register(authRoutes, { prefix: '/api/auth' });

export default app;