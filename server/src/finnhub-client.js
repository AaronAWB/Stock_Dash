import Finnhub from 'finnhub'
import './dotenv-config'

const api_key = Finnhub.ApiClient.instance.authentications['api_key']
api_key.apiKey = process.env.FINNHUB_API_KEY

const finnhubClient = new Finnhub.DefaultApi()

export { finnhubClient }
