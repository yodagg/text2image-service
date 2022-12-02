const { Client } = require('craiyon')
const translate = require('./translate')
const craiyon = new Client()


module.exports = async (text) =>{
    const prompt = await translate(text)
    const result = await craiyon.generate({prompt})
    return result._images.map(item =>`data:image/webp;base64,` + item.base64)
}
