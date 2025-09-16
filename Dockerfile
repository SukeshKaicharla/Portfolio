# Step 1: Build the React (Vite) app
FROM node:18 AS build

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install ALL dependencies (not just production)
RUN npm install --include=dev

# Copy rest of the project
COPY . .

# Build project
RUN npm run build

# Step 2: Use Tomcat to serve static files
FROM tomcat:9.0-jdk17

RUN rm -rf /usr/local/tomcat/webapps/ROOT/*

COPY --from=build /app/dist/ /usr/local/tomcat/webapps/ROOT/

EXPOSE 8080
CMD ["catalina.sh", "run"]











































# FROM tomcat:9.0-jdk17

# WORKDIR /app

# # Copy your project files
# COPY . /app

# # Remove default ROOT (whether it's a folder or ROOT.war)
# RUN rm -rf /usr/local/tomcat/webapps/ROOT \
#     && mkdir -p /usr/local/tomcat/webapps/ROOT

# # Copy your static files into ROOT
# RUN cp -r /app/* /usr/local/tomcat/webapps/ROOT/

# EXPOSE 8080

# CMD ["catalina.sh", "run"]
