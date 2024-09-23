import axios from 'axios'
import 'dotenv/config'

const finnhubAPI = async (fastify, options) => {
    const baseURL = 'https://finnhub.io/api/v1/'
    const quote = '/quote?symbol='


    fastify.get('/quote/:symbol', async (request, reply) => {
        try {
            const { symbol } = request.params;
            const apiKey = process.env.FINNHUB_API_KEY
            console.log('API KEY:', apiKey)
            const res = await axios.get(baseURL + quote + symbol, {
                headers: {
                    'X-Finnhub-Token': `${apiKey}`, 
                    'Content-Type': 'application/json'
                }
            })
            reply.send(res.data)
        } catch (err) {
            reply.status(500).send('500 ERROR:', {err})
        }
    })
}

export default finnhubAPI