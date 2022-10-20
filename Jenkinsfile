pipeline {
  agent any
  stages {
    stage('NPM Install') {
      steps {
        nodejs('jenkins-node') {
          sh 'npm install'
        }

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