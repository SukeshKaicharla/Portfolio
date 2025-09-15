FROM tomcat:9.0-jdk17

# Create a workspace inside container
WORKDIR /app

# Copy everything from repo into container /app
COPY . /app

# Clean default Tomcat ROOT
RUN rm -rf /usr/local/tomcat/webapps/ROOT/*

# Copy built React app from /app/dist into ROOT
RUN cp -r /app/dist/* /usr/local/tomcat/webapps/ROOT/

EXPOSE 8080

CMD ["catalina.sh", "run"]
