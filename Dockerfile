# Base image: Tomcat + JDK
FROM tomcat:9.0-jdk17

# Install Node.js + build tools
RUN apt-get update && \
    apt-get install -y curl gnupg build-essential python3 git && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first for caching
COPY package*.json ./

# Install dependencies including devDependencies (Vite requires devDeps)
RUN npm install --include=dev

# Copy the rest of the project files
COPY . .

# Build the Vite React app
RUN npm run build

# Remove default Tomcat ROOT
RUN rm -rf /usr/local/tomcat/webapps/ROOT/*

# Copy the build output to Tomcat ROOT
RUN cp -r /app/dist/* /usr/local/tomcat/webapps/ROOT/

# Expose Tomcat port
EXPOSE 8080

# Start Tomcat
CMD ["catalina.sh", "run"]
