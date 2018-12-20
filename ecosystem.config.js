module.exports = {
  apps: [{
    script: './dist/app.js',
    node_args: '--max_old_space_size=4096',
    ignore_watch: ['node_modules', '.idea'],

    env_development: {
      name: 'Template Application DEV',
      NODE_ENV: 'development'
    },

    env_uat: {
      name: 'Template Application UAT',
      NODE_ENV: 'uat'
    },

    env_production: {
      name: 'Template Application PROD',
      NODE_ENV: 'production'
    }
  }]
}
