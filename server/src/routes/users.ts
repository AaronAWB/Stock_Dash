import { FastifyPluginAsync } from 'fastify'
import { prisma } from '../plugins/prisma'
import { hashPassword } from '../ auth/password';

const userRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.get('/users', async (request, reply) => {
        const users = await prisma.user.findMany();
        reply.send(users)
    })

    fastify.post('/users', async (request, reply) => {
        const {firstName, lastName, email, password } = request.body as { firstName: string, lastName: string, email: string, password: string};
        const passwordHash = await hashPassword(password);
        const newUser = await prisma.user.create({
            data: { firstName, lastName, email, passwordHash }
        })
        reply.send(newUser)
        reply.status(201).send('User created.')
    })
}

export default userRoutes;