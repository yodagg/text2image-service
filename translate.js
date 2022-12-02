const { translate } = require('@vitalets/google-translate-api')

module.exports = async (content) =>{
    const { text } = await translate(content, { to: 'en' })
    return text
}
