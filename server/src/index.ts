import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import pg from "@fastify/postgres";
import cors from '@fastify/cors';
import { userRoutes } from "./user/user.route";
import fjwt, { FastifyJWT } from '@fastify/jwt';
import fCookie from '@fastify/cookie';
import { adsRoutes } from "./ads/ads.route";

const PORT = 8080;

const app = Fastify({
    logger: true,
});

app.decorate(
    'authenticate',
    async (req: FastifyRequest, reply: FastifyReply) => {
        // const token = req.cookies.access_token;
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return reply.status(401).send({ message: 'Authentication required' });
        }
        const decoded = req.jwt.verify<FastifyJWT['user']>(token);
        req.user = decoded;
    },
);

app.register(fjwt, { secret: 'supersecretcode-CHANGE_THIS-USE_ENV_FILE' });

app.addHook('preHandler', (req: FastifyRequest, _, next) => {
    req.jwt = app.jwt;
    req.pg = app.pg;
    return next();
});

app.register(fCookie, {
    secret: 'some-secret-key',
    hook: 'preHandler',
});

app.register(pg, {
    connectionString: "postgres://postgres:root@localhost/raffle",
});

app.register(cors, { 
    origin: true
});

app.register(userRoutes, { prefix: 'api/v1' });
app.register(adsRoutes, { prefix: 'api/v1/ads' });

app.get('/healthcheck', (req, res) => {
    res.send({ message: 'Success' });
});

const listeners = ['SIGINT', 'SIGTERM'];
listeners.forEach((signal) => {
    process.on(signal, async () => {
        await app.close();
        process.exit(0);
    });
});

async function main() {
    await app.listen({
        port: PORT,
        host: '0.0.0.0',
    });
}
main();