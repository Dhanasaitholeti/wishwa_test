const apiRoutes = require('./api.routes');

const Routehandler = (app) => {
  app.get('/', (req, res) => {
    res.status(200).json({ message: Hello });
  });
  app.use('/api', apiRoutes);
};

module.exports = Routehandler;
