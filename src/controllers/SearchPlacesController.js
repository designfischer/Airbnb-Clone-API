const Place = require('../models/Place')

module.exports = {
    async read(req, res) {
        const { typeOf , city } = req.query

        try {
            const places = await Place.find({ typeOf }).where({ city }).populate('user')

            return res.status(200).send({ data: places })
            return
        } catch(err) {
            return res.status(400).send(err)
        }
    }
}