# Diet Planner

A Diet Planner application is web application where you can register, login, browse many recipes and create your meals.

## Technologies

- React
- NestJS
- Docker
- PostgreSQL

## Prerequisites

Before you run the project, you need to have the following installed:

- **Node.js** - For running the frontend part of the application.
- **Docker** - For running the containers for the backend and database.
- **PostgreSQL** - The database used in this project.

## Installation

1. **Frontend (React)**:
    - Go to the `client/` directory.
    - Install dependencies using NPM:

      ```bash
      cd client
      npm install
      ```

2. **Backend (NestJS)**:
    - Go to the `server/` directory.
    - Install dependencies using NPM:

      ```bash
      cd server
      npm install
      ```

3. **Docker (if you're using Docker for services)**:
    - In the root directory of your project, create .env file and provide environment variables needed to run db, run Docker Compose after that:

      ```bash
      docker-compose up
      ```

## Running the Project

### Running the Frontend (React):
To run the frontend application, use the following command in the `client/` directory:

```bash
cd client
npm run dev
