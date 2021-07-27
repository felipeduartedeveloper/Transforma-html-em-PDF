const express = require('express');

module.exports = () => {
  const app = express();
  app.use(express.json());
  app.set('port',  3000);

  return app
}