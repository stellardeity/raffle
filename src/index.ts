import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import pg from "@fastify/postgres";
import cors from '@fastify/cors';

const fastify = Fastify({
  logger: true,
});

fastify.register(pg, {
  connectionString: "postgres://postgres:root@localhost/raffle",
});

fastify.register(cors, { 
  origin: true
});


fastify.get("/users", (req: FastifyRequest, reply: FastifyReply) => {
  fastify.pg.connect(onConnect);

  function onConnect(err: Error, client, release) {
    if (err) return reply.send(err);

    client.query("SELECT * FROM users;", function onResult(err: Error, result) {
      release();
      reply.send(err || result?.rows);
    });
  }
});


fastify.get("/categories", (req: FastifyRequest, reply: FastifyReply) => {
  fastify.pg.connect(onConnect);

  function onConnect(err: Error, client, release) {
    if (err) return reply.send(err);

    client.query("SELECT * FROM categories;", function onResult(err: Error, result) {
      release();
      reply.send(err || result?.rows);
    });
  }
});


fastify.get("/ads", (req: FastifyRequest, reply: FastifyReply) => {
  fastify.pg.connect(onConnect);

  function onConnect(err: Error, client, release) {
    if (err) return reply.send(err);

    client.query("SELECT * FROM ads;", function onResult(err: Error, result) {
      release();
      reply.send(err || result?.rows);
    });
  }
});

const PORT = 8080;

fastify.listen({ port: PORT }, (err) => {
  if (err) throw err;
  console.log(`server listening on ${PORT}`);
});
