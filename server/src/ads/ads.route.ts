import { FastifyInstance } from "fastify";
import { getAds } from "./ads.controller";

export async function adsRoutes (app: FastifyInstance) {
    app.get("/", { preHandler: [app.authenticate] },getAds);
}