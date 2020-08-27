const Place = require('../models/Place')
const User = require('../models/User')
const { stringToArray } = require('../utils/stringToArray')

module.exports = {
    async create(req, res) {
        const { filename } = req.file
        const { typeOf, price, city, state, features } = req.body
        const { user_id } = req.params

        const featuresArray = stringToArray(features)      
        
        try {
            const userExists = await User.findById(user_id)
            if (!userExists) return res.status(400).send({ message: 'User does not exist' })

            const newPlace = await Place.create({
                user: user_id,
                thumbnail: filename,
                typeOf,
                price,
                city,
                state,
                features: featuresArray
            })
            await newPlace.populate('user').execPopulate()
                
            return res.status(200).send({
                message: 'Place created successfully',
                data: newPlace
            })
        } catch(err) {
            return res.status(400).send(err)
        }       
    },

    async index(req, res) {
        const { user_id } = req.params

        try {
            const placesOfAnUser = await Place.find({ user: user_id })

            return res.status(200).send({ data: placesOfAnUser })
        } catch(err) {
            return res.status(400).send(err)
        }
    }
}