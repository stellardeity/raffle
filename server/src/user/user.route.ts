import { FastifyInstance } from 'fastify';
import { getUsers, login, logout, register } from './user.controller';


export async function userRoutes(app: FastifyInstance) {
    app.post('/register', register);
    app.post('/login', login);
    app.get('/users', { preHandler: [app.authenticate] }, getUsers);
    app.delete('/logout', { preHandler: [app.authenticate] }, logout);
}