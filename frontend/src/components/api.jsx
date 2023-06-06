export const url = 'http://localhost:4000'

export async function getGoods(shop) {
    const response = await fetch(url + '/' + shop)
    const responseJson = await response.json()
    return responseJson
}
