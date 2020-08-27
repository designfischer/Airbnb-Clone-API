const multer = require('multer')
const path = require('path')

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'public', 'images'),
        filename: function (req, file, cb) {

            const extension = path.extname(file.originalname)
            const name = path.basename(file.originalname, extension)
            const currentDate = Date.now()

            cb(null, `${name} - ${currentDate}${extension}`)
        }
    })
}