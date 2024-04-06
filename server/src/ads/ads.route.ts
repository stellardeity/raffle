import { FastifyInstance } from "fastify";
import { getAds, getCategories, getFields } from "./ads.controller";

export async function adsRoutes (app: FastifyInstance) {
    app.get("/", { preHandler: [app.authenticate] },getAds);
    app.get("/categories", { preHandler: [app.authenticate] }, getCategories);
    app.post("/fields", { preHandler: [app.authenticate] }, getFields);
}