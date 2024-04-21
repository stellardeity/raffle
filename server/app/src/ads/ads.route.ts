import { FastifyInstance } from "fastify";
import { addFollower, getAds, getAdsById, getAdsProfile, getCategories, getFields } from "./ads.controller";

export async function adsRoutes (app: FastifyInstance) {
    app.get("/", { preHandler: [app.authenticate] },getAds);
    app.get("/categories", { preHandler: [app.authenticate] }, getCategories);
    app.post("/fields", { preHandler: [app.authenticate] }, getFields);
    app.post("/profile", { preHandler: [app.authenticate] }, getAdsProfile);
    app.post("/", { preHandler: [app.authenticate] }, getAdsById);
    app.post("/followers", { preHandler: [app.authenticate] }, addFollower);
}