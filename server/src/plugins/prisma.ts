import fp from 'fastify-plugin'
import { PrismaClient } from '@prisma/client'

const prismaPlugin = fp(async (fastify, opts) => {
    const prisma = new PrismaClient();

    fastify.decorate('prisma', prisma)

    fastify.addHook('onClose', async (instance) => {
        await prisma.$disconnect()
    })
})

export default prismaPlugin;