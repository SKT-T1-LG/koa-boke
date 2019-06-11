const jwt = require('jsonwebtoken')

module.exports = function (name) {
    const token = jwt.sign({
        name
    }, 'secret_key', {expiresIn: '1h'})
    return token
}