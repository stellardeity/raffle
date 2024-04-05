import { FastifyReply, FastifyRequest } from "fastify";
import * as bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export async function register(req: FastifyRequest<{
    Body: {login: string, password: string}
  }>, reply: FastifyReply) {
    const { login, password } = req.body;

    const client = await req.pg.connect();
    const { rows: user } = await client.query(`SELECT * FROM users WHERE login = '${login}';`);

    if (user.length) {
        client.release();
        return reply.code(401).send({
            message: 'User already exists with this login',
        });
    }
    try {
        const hash = await bcrypt.hash(password, SALT_ROUNDS);
        await client.query(`INSERT INTO users (login, password) VALUES ('${login}', '${hash}');`);
        const { rows: user } = await client.query(`SELECT * FROM users WHERE  login = '${login}';`);
        client.release();
        return reply.code(201).send(user[0]);
    } catch (e) {
        return reply.code(500).send(e);
    }
}

export async function login(req: FastifyRequest<{
    Body: { login: string, password: string }
  }>, reply: FastifyReply) {
    const { login, password } = req.body;

    const client = await req.pg.connect();
    const { rows: user } = await client.query(`SELECT * FROM users WHERE login = '${login}';`);

    const isMatch = user && (await bcrypt.compare(password, user[0].password));
    if (!user || !isMatch) {
        return reply.code(401).send({
            message: 'Invalid email or password',
        });
    }


    const payload = {
        id: user.id,
        login: user.login,
    };

    const token = req.jwt.sign(payload);
    reply.setCookie('access_token', token, {
        path: '/',
        httpOnly: true,
        secure: true,
    });
    return { accessToken: token };

}

export async function logout(req: FastifyRequest, reply: FastifyReply) {
    reply.clearCookie('access_token');
    return reply.send({ message: 'Logout successful' });
}

export async function getUsers(req: FastifyRequest, reply: FastifyReply) {
    const client = await req.pg.connect();
    const { rows: result } = await client.query("SELECT * FROM users;");
    return reply.code(200).send(result);
}