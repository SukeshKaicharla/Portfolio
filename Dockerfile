# Use Tomcat as base
FROM tomcat:9.0-jdk17

WORKDIR /app

# Copy everything from repo (including dist)
COPY . .

# Remove default ROOT
RUN rm -rf /usr/local/tomcat/webapps/ROOT/*

# Move dist into Tomcat ROOT
RUN cp -r dist/* /usr/local/tomcat/webapps/ROOT/

EXPOSE 8080
CMD ["catalina.sh", "run"]
