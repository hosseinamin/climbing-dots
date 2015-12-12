'use strict';

module.exports = {
  REQUESTS_DELAY: 0,
  REQUESTS_DELAY_SYSTEM: 0,
  baseURL: process.env.BASEURL,
  db: 'mongodb://localhost:27017/' + (process.env.DB || 'climbing_dots'),
  mongo: {
    uri:    process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
            'mongodb://localhost/climbing_dots',
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
    port: process.env.PORT || 8111
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