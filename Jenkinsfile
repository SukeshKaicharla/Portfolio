pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/SukeshKaicharla/Portfolio.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh '''
                    docker rmi -f portfolio:latest || true
                    docker build -t portfolio:latest -f Dockerfile .
                '''
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker_cred',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker tag portfolio:latest $DOCKER_USER/portfolio:latest
                        docker push $DOCKER_USER/portfolio:latest
                        docker logout
                    '''
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                    docker rm -f portfolio-cont || true
                    docker run -itd --name portfolio-cont -p 9177:80 portfolio:latest
                '''
            }
        }
    }
}
