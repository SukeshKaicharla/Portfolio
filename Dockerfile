# Use Tomcat base image
FROM tomcat:9.0-jdk17

# Install Node.js and build tools
RUN apt-get update && \
    apt-get install -y curl gnupg build-essential python3 && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package files and install dependencies including devDependencies
COPY package*.json ./
RUN npm install --include=dev

# Copy the rest of the project
COPY . .

# Build the Vite React app
RUN npm run build

# Remove default Tomcat ROOT app
RUN rm -rf /usr/local/tomcat/webapps/ROOT/*

# Copy build output to Tomcat ROOT
RUN cp -r /app/dist/* /usr/local/tomcat/webapps/ROOT/

# Expose Tomcat port
EXPOSE 8080

# Start Tomcat
CMD ["catalina.sh", "run"]
