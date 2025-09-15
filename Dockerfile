# Step 1: Build the React (Vite) app
FROM node:18 AS build

WORKDIR /app

# Copy dependency files first (for caching)
COPY package*.json ./

# Install all dependencies (including dev)
RUN npm install

# Copy rest of the project
COPY . .

# Build project (generates /app/dist)
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy build output to Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
