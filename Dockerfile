# Use official Tomcat with JDK
FROM tomcat:9.0-jdk17

# Remove default ROOT webapp
RUN rm -rf /usr/local/tomcat/webapps/ROOT/*

# Copy your pre-built React app (dist folder) into Tomcat ROOT
COPY dist/ /usr/local/tomcat/webapps/ROOT/

# Expose Tomcat port
EXPOSE 8080

# Start Tomcat
CMD ["catalina.sh", "run"]
