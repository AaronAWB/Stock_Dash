import { FastifyCookieOptions } from 'fastify-cookie'
import { FastifyReply } from 'fastify'

export const SESSION_COOKIE_NAME = "session"

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


    
