import axios from 'axios'
import 'dotenv/config'

const finnhubAPI = async (fastify, options) => {
    const baseURL = 'https://finnhub.io/api/v1/'
    const quote = '/quote?symbol='


    fastify.get('/quote/:symbol', async (request, reply) => {
        try {
            const { symbol } = request.params;
            const apiKey = process.env.FINNHUB_API_KEY
            const res = await axios.get(baseURL + quote + symbol, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            })
            reply.send(res.data)
        } catch (err) {
            reply.status(500).send({error: 'Failed to fetch data.'})
        }
    })
}

export default finnhubAPI