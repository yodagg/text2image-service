const { Client } = require('craiyon')
const craiyon = new Client()

module.exports = async (prompt) =>{
    const result = await craiyon.generate({prompt})
    return result._images.map(item =>`data:image/webp;base64,` + item.base64)
}
