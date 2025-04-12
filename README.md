# CRUD Project with Docker

This is a simple CRUD API using **Express**, **MySQL**, and **Docker**. It allows you to create, read, update, and delete products, and is fully containerized with Docker.

---

## Getting Started

Follow these steps to clone and run the project:

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone <repository-url>
cd <repository-directory>
2. Set Up Environment Variables
Create a .env file in the root of the project directory and add the following variables:

env
Copy
Edit
APP_NAME=CRUD-BACKEND-RWACOF
PORT=5000
DB_HOST=mysql_db
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root
DB_NAME=crud_rwacof__product_db
Note: The database credentials can be adjusted based on your preferences or production configurations.

3. Build and Run the Application
Run the following command to build and start the Docker containers:

bash
Copy
Edit
docker-compose up --build
This will build the Docker containers, start the application, and start the MySQL database container.

4. Access the Application
Once the containers are running, you can access the app via:

App URL: http://localhost:5000

Swagger Documentation: http://localhost:5000/api/v1/api-docs

5. Access MySQL
You can view the MySQL data by connecting to the MySQL container or using a MySQL client to connect to:

Host: localhost

Port: 3306

Database: crud_rwacof__product_db

Username: root

Password: root

This will allow you to view the products table and any data generated through API requests.

6. Stopping the Application
To stop the Docker containers, run:

bash
Copy
Edit
docker-compose down
This will stop the containers without removing them. If you want to remove the containers as well, use:

bash
Copy
Edit
docker-compose down --volumes
7. Clean Up
To remove the containers, networks, and images created by docker-compose, use:

bash
Copy
Edit
docker-compose down --rmi all
Additional Information
The backend is built using Express.

The database used is MySQL.

API documentation is available via Swagger at /api/v1/api-docs.

To test the API, you can use Postman or any similar API testing tool.

Enjoy working with the CRUD project!