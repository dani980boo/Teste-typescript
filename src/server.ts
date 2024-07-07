import Fastify from 'fastify';
import cos from '@fastify/cors';
import { routes } from './routes';
import cors from '@fastify/cors'

const app = Fastify ({ logger: true})

const start = async () => {

    await app.register(routes);
    await app.register(cors);

    try {
        await app.listen({ port: 5000 })
    }
    catch(err) {
        process.exit(1)
    }
}

start();