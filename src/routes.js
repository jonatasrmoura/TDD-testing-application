const routes = require('express').Router();

const authMiddleware = require('./app/middlewares/auth');

const SessionsController = require('./app/controllers/SessionsController');

routes.post('/sessions', SessionsController.store);

routes.use(authMiddleware);

routes.get('/dashboard', (req, res) => {
    return res.status(200).send();
});

module.exports = routes;
