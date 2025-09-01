# Step 1: Use official Tomcat as base image
FROM tomcat:9.0-jdk17-openjdk

# Step 2: Remove default Tomcat applications (clean slate)
RUN rm -rf /usr/local/tomcat/webapps/*

# Step 3: Copy your WAR file built by Maven into Tomcat
# (your artifact is sukesh-devops-nexus.war)
COPY target/sukesh-devops-nexus.war /usr/local/tomcat/webapps/ROOT.war

# Step 4: Expose Tomcat port
EXPOSE 8080

# Step 5: Start Tomcat when container runs
CMD ["catalina.sh", "run"]

