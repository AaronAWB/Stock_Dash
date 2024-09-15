import Fastify from 'fastify'
import 'dotenv/config'
import finnhubAPI from './routes/finnhubAPI.js'


const server = Fastify({
    logger: true
})

const port = 3000 | 3001

server.register(finnhubAPI)

const start = async () => {
    try {
        await server.listen({port})
        console.log(`Server is now listening on ${port}`)
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}

start()