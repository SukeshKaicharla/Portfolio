FROM tomcat:9.0-jdk17

WORKDIR /app

# Copy your project files
COPY . /app

# Remove default ROOT (whether it's a folder or ROOT.war)
RUN rm -rf /usr/local/tomcat/webapps/ROOT \
    && mkdir -p /usr/local/tomcat/webapps/ROOT

# Copy your static files into ROOT
RUN cp -r /app/* /usr/local/tomcat/webapps/ROOT/

EXPOSE 8080

CMD ["catalina.sh", "run"]
