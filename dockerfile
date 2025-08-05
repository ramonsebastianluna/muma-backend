# Imagen base de Node
FROM node:22

# Crear directorio de la app en el contenedor
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer el puerto que usa tu app
EXPOSE 3000

# Comando para que funcione nodemon dentro de docker
CMD ["npx", "nodemon", "--legacy-watch"]

