
# <img src="public/img/logo.png" alt="logo" width="50"/> Agencia de Viajes

Agencia de Viajes es una aplicación web para gestionar reservas de viajes y servicios relacionados.

![Static Badge](https://img.shields.io/badge/Node_version-22.11.0-darkgreen)
![Static Badge](https://img.shields.io/badge/npm_version-10.9.0-darkgreen)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fagenciaviajes-h3ls.onrender.com%2F)
![GitHub commit activity](https://img.shields.io/github/commit-activity/t/pmontanana/agenciaViajes)
![Static Badge](https://img.shields.io/badge/Versi%C3%B3n-1.0-aquamarine)


## Estructura del Proyecto

- `.env.example`: Archivo de configuración de entorno de ejemplo.
- `.gitignore`: Especifica los archivos que deben ser ignorados por Git.
- `config/`: Archivos de configuración.
- `controllers/`: Controladores de la aplicación.
- `index.js`: Punto de entrada principal de la aplicación.
- `models/`: Modelos de la base de datos.
- `package-lock.json`: Archivo de bloqueo de dependencias de npm.
- `package.json`: Metadatos del proyecto y dependencias.
- `public/`: Archivos accesibles públicamente.
- `routers/`: Enrutadores de la aplicación.
- `views/`: Plantillas de vistas.

## Dependencias

- `bcrypt`: ^5.1.1
- `connect`: ^3.7.0
- `dotenv`: ^16.4.7
- `express`: ^4.21.2
- `express-session`: ^1.18.1
- `moment`: ^2.30.1
- `mysql2`: ^3.12.0
- `pug`: ^3.0.3
- `sequelize`: ^6.37.5
- `serve-favicon`: ^2.5.0

## Dependencias de Desarrollo

- `nodemon`: ^3.1.9

## Instrucciones de Configuración

1. Clona el repositorio:
   ```sh
   git clone https://github.com/pmontanana/agenciaViajes.git
   ```
2. Navega al directorio del proyecto:
   ```sh
   cd agenciaViajes
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
4. Crea un archivo `.env` basado en el archivo `.env.example` y configura las variables de entorno necesarias.
5. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```

## Uso

Para iniciar la aplicación, ejecuta:
```sh
npm run dev
```

Abre tu navegador y navega a `http://localhost:3000` para ver la aplicación.


