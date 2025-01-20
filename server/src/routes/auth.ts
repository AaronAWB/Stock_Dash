import { FastifyPluginAsync } from 'fastify'
import { prisma } from '../plugins/prisma'
import { verifyPasswordHash } from '../ auth/password'

const authRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.post('/signin', async (request, reply ) => {
        console.log('Request Body:', request.body);
        const { email, password } = request.body as {email: string, password: string}
        const getUserPasswordHash = async (email: string) => {
            const user = await prisma.user.findUnique({
                where: { email },
                select: { passwordHash: true }
            })

            return user?.passwordHash;
        } 
        const passwordHash = await getUserPasswordHash(email);
        const verifiedPassword = passwordHash ? await verifyPasswordHash(passwordHash, password) : null;
        if (verifiedPassword) {
            reply.send(email)
            reply.status(200).send('User authenticated.')
        } else {
            reply.status(401).send('Invalid email or password.')
        }
    })
}

export default authRoutes;