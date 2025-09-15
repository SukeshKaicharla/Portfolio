# Step 1: Build the React (Vite) app
FROM node:18 AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies including devDependencies
RUN npm install --include=dev

# Copy rest of the app
COPY . .

# If you use environment variables, copy them
# COPY .env .   # uncomment if needed

# Build the app
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
