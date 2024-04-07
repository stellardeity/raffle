import { FastifyReply, FastifyRequest } from "fastify";

export async function getAds(req: FastifyRequest , reply: FastifyReply) {
    const client = await req.pg.connect();
    const { rows: ads } = await client.query("SELECT * FROM ads;");
    client.release();
    return reply.code(200).send(ads);
}

export async function getAdsById(req: FastifyRequest<{Querystring: {id: string}}> , reply: FastifyReply) {
    const client = await req.pg.connect();
    const { id } = req.query;
    const { rows: [category] } = await client.query(`
    SELECT P.id, P.title, P.user_id, C.title AS category,
    JSONB_AGG(jsonb_build_object('name', A.title, 'value', PA.value)) AS attributes
    FROM ads P
    JOIN categories C ON P.category_id = C.id
    LEFT JOIN ads_attributes PA ON P.id = PA.ads_id
    LEFT JOIN attributes A ON PA.attribute_id = A.id
    WHERE P.id = '${id}'
    GROUP BY P.id, P.title, C.title;
    `);
    client.release();
    return reply.code(200).send(category);
}


export async function getAdsProfile(req: FastifyRequest<{Querystring: {id: string}}> , reply: FastifyReply) {
    const client = await req.pg.connect();
    const { id } = req.query;
    const { rows: ads } = await client.query(`
    SELECT P.id, P.title, C.title AS category,
    JSONB_AGG(jsonb_build_object('name', A.title, 'value', PA.value)) AS attributes
    FROM ads P
    JOIN categories C ON P.category_id = C.id
    LEFT JOIN ads_attributes PA ON P.id = PA.ads_id
    LEFT JOIN attributes A ON PA.attribute_id = A.id
    where P.user_id = '${id}'                    
    GROUP BY P.id, P.title, C.title; 
    `);
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
    const { rows: fields } = await client.query(` select a.title from categories c join category_attributes ca on ca.category_id = c.id join attributes a on a.id = ca.attribute_id where c.title = '${title}';`);
    client.release();
    return reply.code(200).send(fields);
}