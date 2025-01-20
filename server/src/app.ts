import fastify from 'fastify';
import prismaPlugin from './plugins/prisma';
import userRoutes from './routes/users';
import authRoutes from '/routes/auth'
import fastifyCookie from 'fastify-cookie'

const app = fastify({ logger: true });

app.register(fastifyCookie)
app.register(prismaPlugin);
app.register(userRoutes, { prefix: '/api' });
app.register(authRoutes, { prefix: '/auth' });

export default app;