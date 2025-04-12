# CRUD Project with Docker

This is a simple CRUD API using **Express**, **MongoDB**, and **Docker**. It allows you to create, read, update, and delete products, and is fully containerized with Docker.

---


## Getting Started

Follow these steps to clone and run the project:

### 1. Clone the Repository

Clone this repository to your local machine:

### 2. Set Up Environment Variables

Create a .env file in the root of the project directory and add the following variables:

APP_NAME=CRUD-project-with-docker
PORT=3000
DB_URI=mongodb://host.docker.internal:27017/crud_project

### 3. Build and Run the Application

Run the following command to build and start the Docker containers:

docker-compose up --build

This will Build the Docker containers,Start the application and MongoDB containers.

### 4. Access the Application

Once the containers are running, you can access the app via:

App URL: http://localhost:3000
Swagger Documentation: http://localhost:3000/api/v1/api-docs

### 4. Access MongoDB

You can view the MongoDB data on localhost:27017. The database crud_project will be automatically created, and you can see the products collection (table) populated with data as you use the API.