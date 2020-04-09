module.exports = {
  apps: [{
    name: 'portfolioEC',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-13-239-24-239.ap-southeast-2.compute.amazonaws.com',
      key: '~/.ssh/portfolioEC.pem',
      ref: 'origin/master',
      repo: 'https://github.com/harrypatrick94/email-server-portfolio.git',
      path: '~/.ssh/portfolioEC.pem',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
