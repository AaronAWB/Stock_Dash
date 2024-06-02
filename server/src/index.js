import Fastify from 'fastify'

const server = Fastify({
    logger: true
})

const port = 3000 | 3001

server.get('/', (request, reply) => {
    reply.send({ hello: 'world'})
})

server.listen({ port: port }, (err, address) => {
    if (err) {
        server.log.error(err)
        process.exit(1)
    }
    console.log(`Server is now listening on ${address}`)
})