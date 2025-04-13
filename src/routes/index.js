import express from "express";
import ProductRouter from "./products.js";
import AnalyticsRouter from "./analytics.js";
const mainRouter = express.Router();

mainRouter.use("/product", ProductRouter);
mainRouter.use("/analytics", AnalyticsRouter);


export default mainRouter