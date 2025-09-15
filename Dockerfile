FROM tomcat:9.0-jdk17

# Set working directory inside container
WORKDIR /app

# Copy dist from build context into /app
COPY dist ./dist

# Clear Tomcat ROOT and copy files
RUN rm -rf /usr/local/tomcat/webapps/ROOT/* \
    && cp -r ./dist/* /usr/local/tomcat/webapps/ROOT/

EXPOSE 8080
CMD ["catalina.sh", "run"]
