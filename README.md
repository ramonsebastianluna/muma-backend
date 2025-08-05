# Proyecto Muma con Node.js + MongoDB + Docker

Este proyecto es una API construida en Node.js con MongoDB como base de datos. Ambos servicios se ejecutan mediante Docker, lo que facilita la instalación y configuración en cualquier entorno.

## Requisitos previos

Antes de comenzar, asegurate de tener instalado lo siguiente:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- (Opcional) [Postman](https://www.postman.com/) para probar la API

---

## Arquitectura en capas del proyecto (layered architecture)

```

📁 muma-backend/
│
├── 📁 src/
│ ├── 📁 config/ # Configuración (por ejemplo, base de datos)
│ │ └── database.js
│ ├── 📁 controllers/ # Lógica de controladores
│ │ └── testApi.controller.js
│ ├── 📁 models/ # Modelos de mongoose
│ │ └── user.model.js # este archivo es un ejemplo de un modelo user
│ ├── 📁 repositories/ # funciones que encapsulan el acceso a la base de datos
│ │ └── testApi.model.js
│ ├── 📁 routes/ # Definición de rutas
│ │ └── testApi.routes.js
│ ├── 📁 services/ # Lógica de negocio
│ ├── app.js # Configuración de la app Express
│ ├── index.js # Punto de entrada de la app (ejecuta app.js)
├── .env
├── Dockerfile
├── docker-compose.yml
├── nodemon.json
├── package.json
└── README.md

```

---

## 1. Clonar el repositorio

```bash
git clone https://github.com/ramonsebastianluna/muma-backend
cd tu-repo
```

---

## 2. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto (si no existe) con el siguiente contenido:

```env
PORT=3000
MONGO_URI=mongodb://mongodb:27017/muma_db
```

> ⚠️ Asegurate de que el nombre de la base de datos esté bien escrito: `muma_db`.

---

## 3. Levantar los contenedores con Docker

Desde la raíz del proyecto, ejecutar:

```bash
docker compose up --build
```

Esto hará lo siguiente:

- Construirá el contenedor de Node.js
- Levantará un contenedor de MongoDB
- Instalará las dependencias automáticamente
- Usará `nodemon` para recargar el backend en caliente ante cambios

---

## 4. Verificar que la API funciona

Una vez que el contenedor esté corriendo correctamente, podés ingresar a:

```
http://localhost:9000/api/testApi
```

Deberías ver una respuesta json como la siguiente:

```
{
  "message": "API funcionando"
}

```

---

## 5. Estructura del Docker

### 🐳 `Dockerfile`

```Dockerfile
FROM node:22

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

# Activar modo legacy para que nodemon funcione con volúmenes montados
CMD ["npx", "nodemon", "--legacy-watch", "index.js"]
```

### 🐳 `docker-compose.yml`

```yaml
version: '3.8'

services:
  node_backend:
    build: .
    ports:
      - '9000:3000'
    volumes:
      - .:/app
      - /app/node_modules
    depends_on:
      - mongodb
    env_file:
      - .env

  mongodb:
    image: mongo:7
    container_name: mongodb
    ports:
      - '27017:27017'
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
```

---

## 6. Tips para desarrollo

- Cada vez que guardás un archivo `.js`, `nodemon` reinicia el servidor automáticamente.
- Si hacés cambios en `Dockerfile`, corré `docker compose up --build` para reconstruir.
- Para ver logs en tiempo real:

```bash
docker logs -f node_backend_container_id
```

O directamente:

```bash
docker compose logs -f
```

---

## 7. Detener los contenedores

```bash
docker compose down
```

Esto apaga los contenedores sin borrar datos de MongoDB (gracias al volumen persistente).

---

## 8. Reiniciar desde cero (opcional)

Si querés eliminar todo, incluidas las bases de datos persistidas:

```bash
docker compose down -v
```

---