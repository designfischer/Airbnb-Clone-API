const mongoose = require('mongoose')

module.exports = {
    async dbConnection(DB_URI) {
        try {
            const connection = await mongoose.connect(DB_URI, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }, () => console.log('Connected to MongoDB Database'))
            return connection
        } catch(err) {
            console.log(err)
        }        
    }
}