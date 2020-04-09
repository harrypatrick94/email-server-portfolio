module.exports = {
  apps: [{
    name: 'email-server-portfolio',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-13-211-135-173.ap-southeast-2.compute.amazonaws.com',
      key: '~/.ssh/portfolioEC.pem',
      ref: 'origin/master',
      repo: 'https://github.com/harrypatrick94/email-server-portfolio.git',
      path: '/home/ubuntu',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
