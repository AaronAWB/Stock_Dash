import Fastify from 'fastify'
import 'dotenv/config'

const server = Fastify({
    logger: true
})

const port = 3000 | 3001

server.get('/', async (request, reply) => {
    reply.send({ hello: 'world'})
})

const start = async () => {
    try {
        await server.listen({port})
        console.log(`Server is now listening on ${address}`)
    } catch (err) {
        server.log.err(err)
        process.exit(1)
    }
}

start()