# Step 1: Build the React (Vite) app
FROM node:18 AS build

# Set working directory inside container
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the app (outputs to /app/dist)
RUN npm run build

# Step 2: Use Nginx to serve the built files
FROM nginx:alpine

# Copy build output to Nginx's default HTML folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 (Nginx default)
EXPOSE 80

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
