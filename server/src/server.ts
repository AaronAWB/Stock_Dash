import app from './app'

const port = 3000 | 3001

const start = async () => {
    try {
        await app.listen({ port })
        console.log(`*** [Server listening on ${port}] ***`)
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}

start()