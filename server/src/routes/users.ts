import { FastifyPluginAsync } from 'fastify'

const userRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.get('/users', async (request, reply) => {
        const users = await fastify.prisma.user.findMany();
        reply.send(users)
    })

    fastify.post('/users', async (request, reply) => {
        const {name, email, password} = request.body as { name: string, email: string, password: string};
        const newUser = await fastify.prisma.user.create({
            data: { name, email, password }
        })
        reply.send(newUser)
    })

}

export default userRoutes;