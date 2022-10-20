pipeline {
  agent any
  stages {
    stage('Build') {
      parallel {
        stage('Build') {
          steps {
            sh 'npm run build'
          }
        }

        stage('Test') {
          steps {
            sh 'npm run test'
          }
        }

      }
    }

  }
}