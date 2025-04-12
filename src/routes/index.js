import express from "express";
import ProductRouter from "./products.js";
const mainRouter = express.Router();

mainRouter.use("/product", ProductRouter);


export default mainRouter