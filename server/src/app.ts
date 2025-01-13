import fastify from 'fastify';
import prismaPlugin from './plugins/prisma';
import userRoutes from './routes/users';

const app = fastify({ logger: true });

app.register(prismaPlugin);
app.register(userRoutes, { prefix: '/api' });

export default app;