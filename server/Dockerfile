# Base image
FROM node:22-alpine

# Create working directory inside the container
WORKDIR /app

# Copy package files first (better Docker caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose application port
EXPOSE 5050

# Start the server
CMD ["npm", "start"]