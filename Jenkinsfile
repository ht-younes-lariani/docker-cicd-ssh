pipeline {
  agent any
  stages {
    stage('Test') {
      parallel {
        stage('Install') {
          steps {
            nodejs('node-jenkins') {
              sh 'npm ci'
            }

          }
        }

        stage('Test') {
          steps {
            sh 'npm run test'
          }
        }

      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

  }
}