import { FastifyReply, FastifyRequest } from "fastify";

export async function getAds(req: FastifyRequest , reply: FastifyReply) {
    const client = await req.pg.connect();
    const { rows: ads } = await client.query("SELECT * FROM ads;");
    client.release();
    return reply.code(200).send(ads);
}

export async function getCategories(req: FastifyRequest , reply: FastifyReply) {
    const client = await req.pg.connect();
    const { rows: categories } = await client.query("SELECT * FROM categories;");
    client.release();
    return reply.code(200).send(categories);
}

export async function getFields(req: FastifyRequest<{Body: {title: string}}> , reply: FastifyReply) {
    const { title } = req.body;

    const client = await req.pg.connect();
    const { rows: [category] } = await client.query(`SELECT * FROM categories WHERE title = '${title}';`);
    const { rows: adsFields } = await client.query(`SELECT field_value, field_name FROM ads_fields WHERE category_id = '${category.id}';`);
    client.release();
    return reply.code(200).send(adsFields);
}