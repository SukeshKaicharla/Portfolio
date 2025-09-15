# Step 1: Build the app
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy only dependency files first (for better caching)
COPY package*.json ./

# Install dependencies (include devDeps so vite is available)
RUN npm install

# Copy the rest of the project
COPY . .

# Build the project (creates /app/dist)
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
