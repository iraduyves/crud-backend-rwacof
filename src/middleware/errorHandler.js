import CustomError from "../utils/customError.js";
import logger from "../utils/logger.js";

const handleValidationError = (error, res) => {
    logger.warn(`ValidationError: ${error.details?.[0]?.message}`);
    return res.status(400).json({
        type: 'ValidationError',
        errorMessage: error.details?.[0]?.message || 'Invalid input',
    });
};

const handleNotFoundError = (error, res) => {
    logger.warn(`NotFoundError: ${error.message}`);
    return res.status(404).json({
        type: 'NotFoundError',
        errorMessage: error.message || 'Resource not found',
    });
};

const handleDuplicateError = (error, res) => {
    const duplicatedField = Object.keys(error.keyValue || {})[0] || 'field';
    logger.warn(`DuplicateError on field: ${duplicatedField}`);
    return res.status(400).json({
        type: 'DuplicateError',
        errorMessage: `Duplicate entry for ${duplicatedField}`,
    });
};

const handleQueryFailedError = (error, res) => {
    logger.error(`QueryFailedError: ${error.message}`);

    if (error.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({
            type: 'DuplicateError',
            errorMessage: 'Duplicate value entered for a unique field',
        });
    }

    return res.status(400).json({
        type: 'QueryFailedError',
        errorMessage: error.message || 'Invalid query execution',
    });
};

const handleCustomError = (error, res) => {
    logger.error(`CustomError [${error.errorCode}]: ${error.message}`);
    return res.status(error.statusCode || 400).json({
        type: error.errorCode || 'CustomError',
        errorMessage: error.message,
    });
};

const handleServerError = (error, res) => {
    logger.error(`Unhandled Server Error: ${error.message}`);
    return res.status(500).json({
        type: 'ServerError',
        errorMessage: 'Something went wrong. Please try again later.',
    });
};

const errorHandler = (error, req, res, next) => {
    logger.error(`${req.method} ${req.originalUrl} - ${error.message}`);

    switch (true) {
        case error.name === 'ValidationError':
            return handleValidationError(error, res);
        case error.name === 'NotFoundError':
            return handleNotFoundError(error, res);
        case error.code === 'ER_DUP_ENTRY':
            return handleDuplicateError(error, res);
        case error.name === 'QueryFailedError' || error.driverError:
            return handleQueryFailedError(error, res);
        case error instanceof CustomError:
            return handleCustomError(error, res);
        default:
            return handleServerError(error, res);
    }
};

export default errorHandler;
