import fp from 'fastify-plugin'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const prismaPlugin = fp(async (fastify) => {
    const prisma = new PrismaClient();

    fastify.decorate('prisma', prisma)

    fastify.addHook('onClose', async () => {
        await prisma.$disconnect()
    })
})

export { prisma }
export default prismaPlugin;