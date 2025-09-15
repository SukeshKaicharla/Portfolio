# Use Tomcat as base
FROM tomcat:9.0-jdk17

# Set workdir to /app
WORKDIR /app

# Copy everything from repo into /app
COPY . .

# Remove default ROOT from Tomcat
RUN rm -rf /usr/local/tomcat/webapps/ROOT/*

# Copy dist/ into Tomcat ROOT
COPY dist/ /usr/local/tomcat/webapps/ROOT/

# Expose port
EXPOSE 8080

# Start Tomcat
CMD ["catalina.sh", "run"]
