const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const fs = require('fs/promises')
const database = require('./db')
const { createConnroller } = require('./controller')
const {createInitialProduct} = require('./dbSetup')
const multer = require('multer')
app.use(cors())

app.use(express.static('uploads'))

async function run() {
    try {
        createConnroller(app)
        await database.connectToShops()
        createInitialProduct()
        if (process.env.NODE_ENV !== 'test') {
            app.listen(port, () => console.log(`Listening on port ${port}`))
        }
    } catch (err) {
        console.log(err)
    } finally {
    }
}

run().catch(console.error)

module.exports = app
process.on('SIGINT', async function () {
    await database.mongoClienter.close()
    process.exit()
})
