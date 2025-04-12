import { AppDataSource } from "../config/database.js";
import CustomError from "../utils/customError.js";
import { Product } from "../models/Product.js";


const productRepository = AppDataSource.getRepository('Product');

export const createProduct = async (data) => {
    const product = productRepository.create(data);
    return await productRepository.save(product);
};

export const getAllProducts = async () => {
    return await productRepository.find();
};

export const getProductById = async (id) => {
    const product = await productRepository.findOneBy({ id: id });
    if (!product) throw new CustomError(404, 'NotFoundError', 'Product not found');
    return product;
};

export const updateProduct = async (id, data) => {
    const product = await productRepository.findOneBy({ id: id })
    if (!product) throw new CustomError(404, 'NotFoundError', 'Product not found');
    productRepository.merge(product, data);
    return await productRepository.save(product);
};

export const deleteProduct = async (id) => {
    const result = await productRepository.delete((id));
    if (result.affected === 0) throw new CustomError(404, 'NotFoundError', 'Product not found');
};
