const User = require('../models/User')

module.exports = {
    async create(req, res) {
        const { email, password } = req.body

        try {  
            const alreadyExists = await User.findOne({ email: email })
            if (alreadyExists) {
                return res.status(404).send({ message: 'User already exists' })
            }
            
            const newUser = await User.create({
                email,
                password
            })

            return res.status(200).send({ 
                message: 'User created successfully',
                data: {
                    id: newUser._id,
                    email: newUser.email
                }
            })
        } catch(err) {
            return res.status(400).send(err)
        }       
    },

    async read(req, res) {
        const { user_email } = req.params
                
        try {
            const foundUser = await User.findOne({ email: user_email }) 

            if (foundUser !== null) {
                return res.status(200).send({                    
                    data: {
                        id: foundUser._id,
                        email: foundUser.email
                    }
                })
            } else {
                return res.status(404).send({ message: 'User not found' })
            }

        } catch(err) {
            return res.status(400).send(err)
        }
    },

    async delete(req, res) {
        const { user_id } = req.params

        const { auth } = req.headers

        if (!auth) return res.status(40).send({ message: 'No token' })
        if (auth !== user_id) return res.status(400).send({ message: 'Invalid token' })

        try {
            const deletedUser = await User.findById(user_id)            

            return res.status(200).send({ message: `User ${deletedUser.email} deleted successfully` })
        } catch(err) {
            return res.status(400).send(err)
        }
    }
}