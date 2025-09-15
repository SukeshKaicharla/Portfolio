# Step 1: Build the React (Vite) app
FROM node:18 AS build

WORKDIR /app

# Copy package.json and lock file first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the project
COPY . .

# Build the project (creates /app/dist)
RUN npm run build

# Step 2: Use Tomcat to serve static files
FROM tomcat:9.0-jdk17

# Remove default ROOT app
RUN rm -rf /usr/local/tomcat/webapps/ROOT/*

# Copy build output into Tomcat ROOT
COPY --from=build /app/dist /usr/local/tomcat/webapps/ROOT/

# Expose Tomcat port
EXPOSE 8080

# Start Tomcat
CMD ["catalina.sh", "run"]
