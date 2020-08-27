const User = require('../models/User')

module.exports = {
    async read(req, res) {
        try {
            const allUsers = await User.find()

            const allUsersWithoutPassword = allUsers.map(user => (
                {
                    _id: user._id, 
                    email: user.email,
                }
            ))
            
            return res.status(200).send({
                data: allUsersWithoutPassword 
            })
        } catch(err) {
            return res.status(400).send(err)            
        }      
    }
}