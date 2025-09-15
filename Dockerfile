FROM tomcat:9.0-jdk17

WORKDIR /usr/local/tomcat/webapps

RUN rm -rf ROOT/*

# Copy the dist folder from the Portfolio directory inside Jenkins workspace
COPY Portfolio/dist/ ROOT/

EXPOSE 8080

CMD ["catalina.sh", "run"]
