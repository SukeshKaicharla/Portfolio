pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/SukeshKaicharla/Portfolio.git'
            }
        }

        stage('Build with Maven') {
            steps {
                sh 'mvn clean install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker rmi -f portfolio-app:v1 || true
                    docker build -t portfolio-app:v1 -f /var/lib/jenkins/workspace/Portfolio/Dockerfile /var/lib/jenkins/workspace/Portfolio
                '''
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                    docker rm -f portfolio-cont || true
                    docker run -itd --name portfolio-cont -p 6320:8080 portfolio-app:v1
                '''
            }
        }
    }
}

