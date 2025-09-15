# Use Tomcat base image
FROM tomcat:9.0-jdk17

# Set working directory inside container
WORKDIR /usr/local/tomcat/webapps

# Remove default ROOT app
RUN rm -rf ROOT/*

# Copy built dist folder directly into ROOT
COPY dist/ ROOT/

# Expose Tomcat port
EXPOSE 8080

# Start Tomcat
CMD ["catalina.sh", "run"]
