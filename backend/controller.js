const database = require('./db')
const multer = require('multer')

function createConnroller(app) {

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
        },
    })

    const upload = multer({ storage: storage })

    app.get('/:shop', upload.any('files'), getProducts)

    async function getProducts(req, res) {
        console.log(req.params.shop)
        const shop = await database.getCollectionShop(req.params.shop)
        res.send(shop)
    }
}
module.exports = { createConnroller }
