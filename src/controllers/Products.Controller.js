import CustomError from '../utils/customError.js';
import { validateProduct } from '../validators/productValidator.js';
import * as productService from '../service/productService.js';



export const createProduct = async (req, res, next) => {
    try {
        if (req.file) {
            req.body.imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
        }
        const { error } = validateProduct(req.body);

        if (error) {
            if (req.file) {
                fs.unlinkSync(req.file.path);
            }
            throw new CustomError(400, 'ValidationError', error.details[0].message);
        }
        const parsedBody = {
            ...req.body,
            price: parseFloat(req.body.price),
            stock: parseInt(req.body.stock),
        };

        const newProduct = await productService.createProduct(parsedBody);
        res.status(201).json({ message: 'Product created successfully', data: newProduct });
    } catch (err) {
        next(err);
    }
};

export const getAllProducts = async (req, res, next) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json({ data: products });
    } catch (err) {
        next(err);
    }
};

export const getProductById = async (req, res, next) => {
    try {

        const product = await productService.getProductById(req.params.id);
        res.status(200).json({ data: product });
    } catch (err) {
        next(err);
    }
};

export const updateProduct = async (req, res, next) => {
    try {
        console.log(req.body);

        if (req.file) {
            req.body.imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
        }
        const { error } = validateProduct(req.body);

        if (error) {
            if (req.file) {
                fs.unlinkSync(req.file.path);
            }
            throw new CustomError(400, 'ValidationError', error.details[0].message);
        }
        const parsedBody = {
            ...req.body,
            price: parseFloat(req.body.price),
            stock: parseInt(req.body.stock),
        };
        const updated = await productService.updateProduct(req.params.id, parsedBody);
        res.status(200).json({ message: 'Product updated', data: updated });
    } catch (err) {
        next(err);
    }
};

export const deleteProduct = async (req, res, next) => {
    try {
        await productService.deleteProduct(req.params.id);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        next(err);
    }
};
