const { Router } = require('express')
const UserController = require('../controllers/UserController')
const UsersController = require('../controllers/UsersController')

const routes = Router()

routes.post('/user', UserController.create)
routes.get('/user/:user_email', UserController.read)
routes.delete('/user/:user_id', UserController.delete)

routes.get('/user', UsersController.read)

module.exports = routes