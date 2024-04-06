import { FastifyInstance } from 'fastify';
import { getUserProfile, getUsers } from './users.controller';


export async function usersRoutes(app: FastifyInstance) {
    app.delete('/', { preHandler: [app.authenticate] }, getUsers);
    app.get('/profile', { preHandler: [app.authenticate] }, getUserProfile);
}