# CRUD Project with Docker

This is a simple CRUD API using **Express**, **MySQL**, and **Docker**. It allows you to create, read, update, and delete products, and is fully containerized with Docker. Additionally, it includes analytics endpoints for commodity trends and overall analytics data.

---

## Features


- **CRUD Operations**: Manage products with endpoints for creating, reading, updating, and deleting.
- **Analytics**: Fetch commodity trends and overall analytics data.
- **File Uploads**: Supports image uploads for products using `multer`.
- **Swagger Documentation**: API documentation available at `/api/v1/api-docs`.
- **Dockerized**: Fully containerized with Docker and Docker Compose.
- **MySQL Database**: Uses MySQL as the database with TypeORM for data modeling.
- **Error Handling**: Centralized error handling with custom error classes.
- **Logging**: Integrated logging using `winston`.

---

## Getting Started

Follow these steps to clone and run the project:

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone 'https://github.com/iraduyves/crud-backend-rwacof.git'
cd crud_backend_rwacof
```

### 2. Set Up Environment Variables

Create a `.env` file in the root of the project directory and add the following variables:

```env
APP_NAME=CRUD-BACKEND-RWACOF
PORT=5000
DB_HOST=mysql_db
DB_PORT=3306
DB_USER=root
DB_PASSWORD="
DB_NAME=rwacof_analytics
BASE_URL=http://127.0.0.1:5000/api
UPLOAD_DIR=./uploads
```

### 3. Build and Run the Application

Run the following command to build and start the Docker containers:

```bash
docker-compose up --build
```

This will build the Docker containers, start the application, and start the MySQL database container.

### 4. Access the Application

- **App URL**: [http://localhost:5000](http://localhost:5000)
- **Swagger Documentation**: [http://localhost:5000/api/v1/api-docs](http://localhost:5000/api/v1/api-docs)

### 5. Access MySQL

You can view the MySQL data by connecting to the MySQL container or using a MySQL client to connect to:

- **Host**: `localhost`
- **Port**: `3306`
- **Database**: `crud_rwacof__product_db`
- **Username**: `root`
- **Password**: `root`

### 6. Stopping the Application

To stop the Docker containers, run:

```bash
docker-compose down
```

This will stop the containers without removing them. If you want to remove the containers as well, use:

```bash
docker-compose down --volumes
```

### 7. Clean Up

To remove the containers, networks, and images created by Docker Compose, use:

```bash
docker-compose down --rmi all
```

---

## API Endpoints

### Products

- **GET** `/product/allproducts`: Get all products.
- **GET** `/product/getProductById/:id`: Get a product by ID.
- **POST** `/product/createProduct`: Create a new product (supports image upload).
- **PUT** `/product/updateProductById/:id`: Update a product by ID (supports image upload).
- **DELETE** `/product/deleteProductById/:id`: Delete a product by ID.

### Analytics

- **GET** `/analytics/analytics-data`: Get overall analytics summary.
- **GET** `/analytics/commodity-trends-data`: Get agriculture commodities performance data.

---

## Project Structure

```plaintext
crud-backend-rwacof/
├── src/
│   ├── config/          # Configuration files (e.g., database)
│   ├── controllers/     # API controllers
│   ├── middleware/      # Middleware (e.g., error handling)
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── service/         # Business logic
│   ├── utils/           # Utility functions (e.g., logger, multer config)
│   ├── validator/       # Request validation logic
│   ├── app.js           # Express app setup
│   └── index.js         # Entry point
├── Dockerfile           # Dockerfile for the app
├── docker-compose.yml   # Docker Compose configuration
├── .env                 # Environment variables
├── package.json         # Node.js dependencies and scripts
└── README.md            # Project documentation
```

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **ORM**: TypeORM
- **Validation**: Joi
- **File Uploads**: Multer
- **Logging**: Winston
- **API Documentation**: Swagger
- **Containerization**: Docker, Docker Compose

---

## Additional Information

- **Swagger Documentation**: Available at `/api/v1/api-docs`.
- **Testing**: Use Postman or similar tools to test the API.
- **Logs**: Application logs are stored in the `logs/` directory.

Enjoy working with the CRUD project!