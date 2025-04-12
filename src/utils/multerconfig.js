import multer from 'multer';
import fs from 'fs';

const uploadDir = process.env.UPLOAD_DIR || './uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/bmp',
    'image/webp',
    'image/svg+xml',
    'application/pdf'
];

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => {
        const fileExtension = file.originalname.split('.').pop();
        const fileName = `${Date.now()}-${Math.round(Math.random() * 1E9)}.${fileExtension}`;
        cb(null, fileName);
    },
});

const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if (!allowedTypes.includes(file.mimetype)) {
            return cb(new Error('Invalid file type. Allowed types: JPEG, PNG, GIF, BMP, WebP, SVG, PDF.'));
        }
        cb(null, true);
    },
});

export default upload;
