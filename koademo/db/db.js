const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/boke', {useNewUrlParser: true})

let db = mongoose.connection

mongoose.Promise = global.Promise

db.on('error', function () {
    console.log('数据库连接出错！');
});
db.on('open', function () {
    console.log('数据库连接成功！');
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    token: String,
    id: String
})

const Models = {
    User: mongoose.model('User', userSchema)
}

module.exports = Models