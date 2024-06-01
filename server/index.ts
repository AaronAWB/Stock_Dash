import Fastify from 'fastify'

interface IHeaders {
    'h-custom' : string;
}

interface IReply {
    200: { success: boolean },
    302: { url: string },
    '4xx': { error: string }
}

const server = Fastify()

server.get('/ping', async (request, reply) => {
    return 'pong\n'
  })

server.listen({ port: 3000 }, (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server listening at ${address}`)
  })