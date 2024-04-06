import { FastifyInstance } from 'fastify';
import { login, logout, register } from './auth.controller';


export async function authRoutes(app: FastifyInstance) {
    app.post('/register', register);
    app.post('/login', login);
    app.delete('/logout', { preHandler: [app.authenticate] }, logout);
}