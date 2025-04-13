import { Router } from 'express';
import * as analyticsController from '../controllers/Analytics.Controller.js';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     AnalyticsSummary:
 *       type: object
 *       properties:
 *         average_price:
 *           type: number
 *           description: Average price of all commodities
 *         min_price:
 *           type: object
 *           properties:
 *             commodity:
 *               type: string
 *             price:
 *               type: number
 *         max_price:
 *           type: object
 *           properties:
 *             commodity:
 *               type: string
 *             price:
 *               type: number
 *         top_gainers:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               agricultural:
 *                 type: string
 *               percentage:
 *                 type: number
 *         top_losers:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               agricultural:
 *                 type: string
 *               percentage:
 *                 type: number
 *         ytd:
 *           type: object
 *           properties:
 *             positive:
 *               type: integer
 *             negative:
 *               type: integer
 *       example:
 *         average_price: 1298.92
 *         min_price: { commodity: "Cheese USD/Lbs", price: 1.753 }
 *         max_price: { commodity: "Cocoa USD/T", price: 8471.57 }
 *         top_gainers: [
 *           { agricultural: "Orange Juice USd/Lbs", percentage: 5.68 },
 *           { agricultural: "Coffee USd/Lbs", percentage: 4.91 }
 *         ]
 *         top_losers: [
 *           { agricultural: "Cotton USd/Lbs", percentage: -1.1 },
 *           { agricultural: "Sugar USd/Lbs", percentage: -0.71 }
 *         ]
 *         ytd: { positive: 10, negative: 13 }
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CommodityTrend:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         agricultural:
 *           type: string
 *         price:
 *           type: number
 *         day:
 *           type: number
 *         percentage:
 *           type: number
 *         weekly:
 *           type: number
 *         monthly:
 *           type: number
 *         ytd:
 *           type: number
 *         yoy:
 *           type: number
 *         date:
 *           type: string
 *       example:
 *         id: 47
 *         agricultural: "Soybeans USd/Bu"
 *         price: 1042.75
 *         day: 13.75
 *         percentage: 1.34
 *         weekly: 6.73
 *         monthly: 4.22
 *         ytd: 4.46
 *         yoy: -11.1
 *         date: "Apr/11"
 */

/**
 * @swagger
 * tags:
 *   name: Analytics
 *   description: Analytics & Commodities Endpoints
 */

/**
 * @swagger
 * /analytics/analytics-data:
 *   get:
 *     summary: Get overall analytics summary
 *     tags: [Analytics]
 *     responses:
 *       200:
 *         description: Summary data including average, min, max, gainers, losers, etc.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AnalyticsSummary'
 */
router.get('/analytics-data', analyticsController.GetAnalytics);

/**
 * @swagger
 * /analytics/commodity-trends-data:
 *   get:
 *     summary: Get agriculture commodities performance data
 *     tags: [Analytics]
 *     responses:
 *       200:
 *         description: List of commodity trends
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CommodityTrend'
 */
router.get('/commodity-trends-data', analyticsController.GetAgricultureCommodities);

export default router;
