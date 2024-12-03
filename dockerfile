# Usar a imagem oficial do Node.js
FROM node:20

# Definir diretório de trabalho
WORKDIR /usr/src/app

# Copiar apenas os arquivos de dependências primeiro para aproveitar o cache do Docker
COPY package*.json ./

# Instalar todas as dependências (incluindo devDependencies)
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Construir o aplicativo NestJS
RUN npm run build

# Expor a porta
EXPOSE 8080

# Comando para rodar a aplicação
CMD ["node", "dist/main"]