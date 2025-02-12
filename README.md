Based on the project files and dependencies, here is a draft README for the project:

---

# Agencia de Viajes

Agencia de Viajes is a web application for managing travel bookings and related services.

## Project Structure

- `.env.example`: Sample environment configuration file.
- `.gitignore`: Specifies files to be ignored by Git.
- `.idea/`: Directory for IntelliJ IDEA project settings.
- `config/`: Configuration files.
- `controllers/`: Application controllers.
- `index.js`: Main entry point of the application.
- `models/`: Database models.
- `package-lock.json`: Lockfile for npm dependencies.
- `package.json`: Project metadata and dependencies.
- `public/`: Publicly accessible files.
- `routers/`: Application routers.
- `views/`: View templates.

## Dependencies

- `dotenv`: ^16.4.7
- `express`: ^4.21.2
- `moment`: ^2.30.1
- `mysql2`: ^3.12.0
- `pug`: ^3.0.3
- `sequelize`: ^6.37.5

## Dev Dependencies

- `nodemon`: ^3.1.9

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/pmontanana/agenciaViajes.git
   ```
2. Navigate to the project directory:
   ```sh
   cd agenciaViajes
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file based on the `.env.example` file and configure the necessary environment variables.
5. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

To start the application, run:
```sh
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

---

You can further customize this README based on specific details or additional information about your project.