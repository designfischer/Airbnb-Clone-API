const Place = require('../models/Place')

module.exports = {
    async readAll(req, res) {       
        try {
            const places = await Place.find().populate('user')

            return res.status(200).send({ data: places })            
        } catch(err) {
            return res.status(400).send(err)
        }
    },

    async readSpecific(req, res) {
        const { place_id } = req.params

        try {
            const place = await Place.findById(place_id)

            return res.status(200).send({ data: place })
        } catch(err) {
            return res.status(400).send(err)
        }
    }
}