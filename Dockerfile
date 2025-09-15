# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the project
COPY . .

# Build the project
RUN npm run build

# Install a static file server
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Serve the build output
CMD ["serve", "-s", "dist", "-l", "3000"]
