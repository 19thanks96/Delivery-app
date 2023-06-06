const MongoClient = require('mongodb').MongoClient
const initialProducts = require('./initialproducts')
const url = 'mongodb://127.0.0.1:27017/'
const mongoClienter = new MongoClient(url)
let collectionMcDonny
let collectionCfk
let db

async function connectToShops() {
    await mongoClienter.connect()
    db = mongoClienter.db('Shops')
    collectionMcDonny = db.collection('Mc Donny')
    collectionCfk = db.collection('CFK')
}

async function addtoMcDonny() {
    const results = await collectionMcDonny.insertMany(
        initialProducts.productsMcDomnny
    )
    console.log(results)
}

async function addtoCfk() {
    const resultsv2 = await collectionCfk.insertMany(
        initialProducts.productsCfk
    )
}

async function checkExistCollectionMcDonny() {
    const countDb = await collectionMcDonny.count()
    return countDb !== 0
}

async function checkExistCollectionCfk() {
    const countDb = await collectionCfk.count()
    return countDb !== 0
}

async function getCollectionShop(collection) {
    const getCollection = db.collection(collection)
    const results = await getCollection.find().toArray()
    return results
}

module.exports = {
    connectToShops,
    mongoClienter,
    addtoMcDonny,
    addtoCfk,
    addtoMcDonny,
    getCollectionShop,
    checkExistCollectionMcDonny,
    checkExistCollectionCfk,
}
