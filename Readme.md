# My Full-Stack Project

This project contains a backend built with Express.js, PostgreSQL, and Prisma, as well as a frontend in a separate folder. Docker is used to set up the database and simplify the development environment.

## Project Structure

- `test-backend/` – Node.js backend with Express.js, Prisma, and PostgreSQL.
- `test-frontend/` – Frontend project with Typescript, Material UI and Axios.

## Setup

### Requirements

- Docker
- Node.js (version 18 or higher)
- npm  

### Setup Steps

1. **Clone the Repository**  
   Clone this repository to your local machine.

   ```bash
   git clone <url>
   cd <url>

   ```

2. **Backend Configuration**  
   Navigate to the test-backend folder:

   ````bash
   cd test-backend
   ````

   Create a .env file in the test-backend folder and add the following:

   ```bash
   DATABASE_URL="postgresql://user:password@localhost:5500/db"
   ````

   Go to the global folder (full stack test) and run

   ```bash
    npm run back:start
   ````

   Make sure that you have no errors in the terminal

3. **Frontend Configuration**
   Run following script from the global folder  

   ```bash
   npm run front:start
   ````

   Open the http://localhost:5173/
