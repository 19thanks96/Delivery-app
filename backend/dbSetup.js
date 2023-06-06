const database = require('./db')

async function createInitialProduct() {
const existCollectionMcdonny = await database.checkExistCollectionMcDonny()
const existCollectionCfk = await database.checkExistCollectionCfk()
if (!existCollectionMcdonny) {
    console.log(existCollectionMcdonny)
    await database.addtoMcDonny()
}
if (!existCollectionCfk) {
    await database.addtoCfk()
}
}
module.exports = { createInitialProduct }