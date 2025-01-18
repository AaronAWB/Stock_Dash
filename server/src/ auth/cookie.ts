import { FastifyRequest, FastifyReply } from 'fastify'
import { validateSession } from './session'
import { LRUCache } from 'lru-cache'

export const SESSION_COOKIE_NAME = "session"


const sessionCache = new LRUCache<string, { session: any; user: any }>({
    max: 1000,
    ttl: 1000 * 60 * 15,
})

export const setSessionCookie = async (
    reply: FastifyReply, 
    sessionToken: string, 
    expiresAt: Date
) => { 
    reply.setCookie(SESSION_COOKIE_NAME, sessionToken), {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        expires: expiresAt
    }
}

export const deleteSessionCookie = async (reply: FastifyReply) => {
    reply.clearCookie(SESSION_COOKIE_NAME, {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        path: '/'
    })
}

export const getAuth = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const sessionToken = request.cookies[SESSION_COOKIE_NAME];
        if (!sessionToken) {
            reply.code(401).send({error: 'Authentication required.'})
            return { session: null, user: null}
        };

        if (sessionCache.has(sessionToken)) {
            return sessionCache.get(sessionToken)
        }

        const { session, user } = await validateSession(sessionToken)

        if (!session) {
            reply.code(401).send({ error: 'Invalid session.' })
            return { session: null, user: null }
        }

        sessionCache.set(sessionToken, { session, user })

    } catch (error) {
        request.log.error(error);
        reply.code(500).send({ error: 'Internal server error.'})
        return { session: null, user: null }
    }
}


    
