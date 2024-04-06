import { FastifyReply, FastifyRequest } from "fastify";

export async function getAds(req: FastifyRequest , reply: FastifyReply) {
    console.log("get ads");
    const client = await req.pg.connect();
    const { rows: ads } = await client.query("SELECT * FROM ads;");
    client.release();
    return reply.code(201).send(ads);
}