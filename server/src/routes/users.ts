import { FastifyPluginAsync } from 'fastify'
import { prisma } from '../plugins/prisma'

const userRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.get('/users', async (request, reply) => {
        const users = await prisma.user.findMany();
        reply.send(users)
    })

    fastify.post('/users', async (request, reply) => {
        const {name, email, password} = request.body as { name: string, email: string, password: string};
        const newUser = await prisma.user.create({
            data: { name, email, password }
        })
        reply.send(newUser)
        reply.status(201).send('User created.')
    })
}

export default userRoutes;