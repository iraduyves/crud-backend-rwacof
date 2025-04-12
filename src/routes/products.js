import { Router } from 'express';
import * as productController from '../controllers/Products.Controller.js'
import upload from '../utils/multerconfig.js';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - price
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated ID
 *         name:
 *           type: string
 *           description: Product name
 *         description:
 *           type: string
 *           description: Product description
 *         price:
 *           type: number
 *           format: float
 *           description: Product price
 *         category:
 *           type: string
 *           description: Product category
 *         stock:
 *           type: integer
 *           description: Units in stock
 *         imageUrl:
 *           type: string
 *           format: uri
 *           description: Product image URL
 *       example:
 *         name: Coffee Beans
 *         description: Freshly roasted Arabica
 *         price: 15.99
 *         category: Beverages
 *         stock: 100
 *         imageUrl: https://example.com/image.jpg
 */

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: PRODUCT CRUD ENDPOINTS
 */

/**
 * @swagger
 * /product/allproducts:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/allproducts', productController.getAllProducts);

/**
 * @swagger
 * /product/getProductById/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 */
router.get('/getProductById/:id', productController.getProductById);

/**
 * @swagger
 * /product/createProduct:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Validation error
 */
router.post('/createProduct', upload.single('image'), productController.createProduct);

/**
 * @swagger
 * /product/updateProductById/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product updated
 *       404:
 *         description: Product not found
 */
router.put('/updateProductById/:id', upload.single('image'), productController.updateProduct);

/**
 * @swagger
 * /product/deleteProductById/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product deleted
 *       404:
 *         description: Product not found
 */
router.delete('/deleteProductById/:id', productController.deleteProduct);

export default router;
