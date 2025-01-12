import Fastify from 'fastify'
import prisma from './prisma'

const server = Fastify({
    logger: true
})

const port = 3000 | 3001

server.get('/', async (request, reply) => {
    return { hello: 'world'}
})

server.get('/api', async (request, reply) => {
    return { message: "This is the API route!!" }
})

const start = async () => {
    try {
        await server.listen({ port })
        console.log(`*** [Server listening on ${port}] ***`)
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}

start()