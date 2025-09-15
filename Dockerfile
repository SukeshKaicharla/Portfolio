FROM tomcat:9.0-jdk17

# Set workspace
WORKDIR /app

# Copy everything from your repo into container
COPY . /app

# Remove default Tomcat ROOT
RUN rm -rf /usr/local/tomcat/webapps/ROOT/*

# Copy static files directly into ROOT
RUN cp -r /app/* /usr/local/tomcat/webapps/ROOT/

EXPOSE 8080

CMD ["catalina.sh", "run"]
