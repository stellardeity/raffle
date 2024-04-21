import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import fastifyPg from "@fastify/postgres";
import fastifyCors from '@fastify/cors';
import fastifyJwt, { FastifyJWT } from '@fastify/jwt';
import fastifyCookie from '@fastify/cookie';
import fastifyMultipart from '@fastify/multipart';
import fastifyStatic from "@fastify/static";
import fastifyRateLimit from "@fastify/rate-limit";
import fastifyCaching from '@fastify/caching';
import * as client from "prom-client";
import  { activeUsersPerCategoryMetric } from './metrics';

import { adsRoutes } from "./ads/ads.route.js";
import { usersRoutes } from "./users/users.route.js";
import { authRoutes } from "./auth/auth.route.js";


import * as path from "path";

const PORT = 9200;

const app = Fastify({
    logger: true,
});

const registry = new client.Registry();
activeUsersPerCategoryMetric(registry);

app.register(
    fastifyCaching,
    { privacy: fastifyCaching.privacy.NOCACHE },
);

app.register(fastifyRateLimit, {
    max: 100,
    timeWindow: '1 minute'
});

app.register(fastifyMultipart);

app.register(fastifyStatic, {
    root: path.join(__dirname, "../uploads"),
    prefix: "/uploads/",
});

app.addHook('preHandler', (req: FastifyRequest, reply: FastifyReply, next) => {
    req.jwt = app.jwt;
    req.pg = app.pg;

    return next();
});

app.decorate(
    'authenticate',
    async (req: FastifyRequest, reply: FastifyReply) => {
        const token = req.cookies.access_token;
        if (!token) {
            return reply.status(401).send({ message: 'Authentication required' });
        }
        const decoded = req.jwt.verify<FastifyJWT['user']>(token);
        req.user = decoded;
    },
);

app.register(fastifyJwt, { secret: 'supersecretcode-CHANGE_THIS-USE_ENV_FILE' });


app.register(fastifyCors, { 
    origin: true,
    credentials: true
});

app.register(fastifyCookie, {
    secret: 'some-secret-key',
    hook: 'preHandler',
});

app.register(fastifyPg, {
    connectionString: "postgres://postgres:root@localhost/raffle",
});

app.register(authRoutes, { prefix: 'api/v1' });
app.register(adsRoutes, { prefix: 'api/v1/ads' });
app.register(usersRoutes, { prefix: 'api/v1/users' });

app.get('/healthcheck', (req, reply: FastifyReply) => {
    reply.send({ message: 'Success' });
});

app.get('/metrics', async (req: FastifyRequest, reply: FastifyReply) => {
    reply.header('Content-Type', registry.contentType);
    const metrics = registry.metrics();
    reply.send(await metrics);
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