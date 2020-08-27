const express = require('express')
const routes = require('./routes/routes')
const { dbConnection } = require('./utils/dbConnection')
const cors = require('cors')

require('dotenv').config()

const app = express()

dbConnection(process.env.MONGODB_URI)

app.use(cors())
app.use(express.json())
app.use(routes)

const serverPort = process.env.LOCAL_PORT || process.env.PORT

app.listen(serverPort, () => console.log(`Server running on port ${serverPort}`))