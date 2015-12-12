'use strict';
console.log('Config in development');
module.exports = {
  REQUESTS_DELAY: 0,
  REQUESTS_DELAY_SYSTEM: 0,
  baseURL: 'http://localhost:8000',
  db: process.env.MONGOHQ_URL || 'mongodb://' + (process.env.DB_PORT_27017_TCP_ADDR || 'localhost') + '/climbingdots',
  mongo: {
    uri:    process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
            'mongodb://localhost/climbingdots',
    options: {
      user: process.env.MONGO_USER ||
            '',
      pass: process.env.MONGO_PASS ||
            '',
      replset: { rs_name: process.env.MONGO_REPLSET || '' }
      }
  }
  server: {
    host: 'localhost',
    port: 8000
  },
  secret: 'ddesksecret',
  settings: {
  	perPage: 10,
  	email: {
  		service: 'Gmail'
  	}
  },
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: 'atwork'
  },
  bitly: {
    token: process.env.BITLY_TOKEN
  },
  diigo: {
    apiKey: process.env.DIIGO_API_KEY,
    username: process.env.DIIGO_USERNAME,
    password: process.env.DIIGO_PASSWORD
  }
};