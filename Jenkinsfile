pipeline {
  agent any
  stages {
    stage('Install Node') {
      steps {
        nodejs 'jenkins-node'
      }
    }

    stage('NPM Install') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Build') {
      parallel {
        stage('Build') {
          steps {
            sh 'npm run build'
          }
        }

        stage('Test') {
          steps {
            sh 'npm test'
          }
        }

      }
    }

  }
}