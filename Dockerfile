# Use Tomcat as base
FROM tomcat:9.0-jdk17

# Set working directory
WORKDIR /app

# Install Node.js (for build)
RUN apt-get update && \
    apt-get install -y curl gnupg && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --include=dev

# Copy rest of the app
COPY . .

# Build the React (Vite) app
RUN npm run build

# Remove default ROOT in Tomcat
RUN rm -rf /usr/local/tomcat/webapps/ROOT/*

# Copy build output to Tomcat ROOT
RUN cp -r /app/dist/* /usr/local/tomcat/webapps/ROOT/

# Expose Tomcat port
EXPOSE 8080

# Start Tomcat
CMD ["catalina.sh", "run"]
