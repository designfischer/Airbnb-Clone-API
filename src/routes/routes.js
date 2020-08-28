const { Router } = require('express')
const multer = require('multer')
const uploadConfig = require('../config/uploadConfig')

const UserController = require('../controllers/UserController')
const UsersController = require('../controllers/UsersController')
const UserPlaceController = require('../controllers/UserPlaceController')
const SearchPlacesController = require('../controllers/SearchPlacesController')
const PlacesController = require('../controllers/PlacesController')

const routes = Router()
const upload = multer(uploadConfig)

routes.post('/users', UserController.create)
routes.get('/users/:user_email', UserController.read)
routes.delete('/users/:user_id', UserController.delete)

routes.get('/users', UsersController.read)

routes.post('/:user_id/places', upload.single('thumbnail'), UserPlaceController.create)
routes.get('/:user_id/places', UserPlaceController.index)

routes.get('/places', PlacesController.readAll)
routes.get('/places/:place_id', PlacesController.readSpecific)

routes.get('/searchplaces', SearchPlacesController.read)

module.exports = routes