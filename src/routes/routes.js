const { Router } = require('express')
const multer = require('multer')
const uploadConfig = require('../config/uploadConfig')

const UserController = require('../controllers/UserController')
const UsersController = require('../controllers/UsersController')
const PlaceController = require('../controllers/PlaceController')
const SearchPlacesController = require('../controllers/SearchPlacesController')
const PlacesController = require('../controllers/PlacesController')

const routes = Router()
const upload = multer(uploadConfig)

routes.post('/user', UserController.create)
routes.get('/user/:user_email', UserController.read)
routes.delete('/user/:user_id', UserController.delete)

routes.get('/user', UsersController.read)

routes.post('/:user_id/place', upload.single('thumbnail'), PlaceController.create)
routes.get('/:user_id/place', PlaceController.index)

routes.get('/places', PlacesController.readAll)
routes.get('/place/:place_id', PlacesController.readSpecific)

routes.get('/place', SearchPlacesController.read)

module.exports = routes