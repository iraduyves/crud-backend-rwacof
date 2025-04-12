import express from 'express';
import mainRouter from './routes/index.js';
import bodyParser from 'body-parser';
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import path from 'path';
import cors from "cors";
import { AppDataSource } from './config/database.js';
import 'reflect-metadata';
import logger from './utils/logger.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.originalUrl}`);
    next();
});

const uploadDir = path.resolve('uploads');
app.use('/uploads', express.static('uploads'));
console.log(`Serving static files from: ${uploadDir}`);

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'CRUD PROJECT API',
            version: '1.0.0',
            description: ' RWACOF TEST CRUD API',
            contact: {
                name: 'Yves',
                email: 'iradukundayves11@gmail.com',
            },
        },
        servers: [
            {
                url: `http://localhost:${PORT}/api/v1`,
            },
        ],
    },
    apis: ["./src/routes/*.js"],
};

const specs = swaggerJSDoc(swaggerOptions);
app.use("/api/v1/api-docs", swaggerUI.serve, swaggerUI.setup(specs));


app.use('/api/v1', mainRouter);

app.get('/', (req, res) => {
    res.send(' WELCOME TO RWACOF CRUD API');
});

AppDataSource.initialize()
    .then(() => {
        logger.info('Database connected Sucessfully!!')

    })
    .catch((err) => {
        // console.error('Database connection error:', err);
        logger.error('Database connection error:', err)
    });

export default app;
