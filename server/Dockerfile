# Base image
FROM node:22-alpine

# Create working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Expose application port
EXPOSE 5050

# Start application
CMD ["npm", "start"]