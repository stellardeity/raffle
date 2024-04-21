import { FastifyInstance } from 'fastify';
import { editUserPhoto, getUserProfile, getUsers } from './users.controller';


export async function usersRoutes(app: FastifyInstance) {
    app.delete('/', { preHandler: [app.authenticate] }, getUsers);
    app.get('/profile', { preHandler: [app.authenticate] }, getUserProfile);
    app.patch('/profile/photo', { preHandler: [app.authenticate] }, editUserPhoto);
}