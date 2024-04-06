import { FastifyReply, FastifyRequest } from "fastify";

export async function getUsers(req: FastifyRequest, reply: FastifyReply) {
    const client = await req.pg.connect();
    const { rows: result } = await client.query("SELECT * FROM users;");
    return reply.code(200).send(result);
}

export async function getUserProfile(req: FastifyRequest, reply: FastifyReply) {
    const client = await req.pg.connect();

    const decodedToken = req.jwt.verify( req.headers.authorization.split(' ')[1]);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { rows: [result] } = await client.query(`SELECT * FROM users WHERE id = '${decodedToken.id}';`);
    return reply.code(200).send(result);
}