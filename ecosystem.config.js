module.exports = {
  apps: [{
    name: 'email-server-portfolio',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-252-142-178.ap-southeast-2.compute.amazonaws.com',
      key: '~/Desktop/portfolioEC.pem',
      ref: 'origin/master',
      repo: 'https://github.com/harrypatrick94/email-server-portfolio.git',
      path: '/home/ubuntu/server/email-server-portfolio',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}