const router = require('koa-router')();

//下面这两个包用来生成时间
//const moment = require('moment');
//const objectIdToTimestamp = require('objectid-to-timestamp');
//createToken
const createToken = require('../api/createToken.js');

const uuid = require('uuid/v1')

const User = require('../db/db.js').User

router
    .post('/', async ctx => {
        const {username, password, password2} = ctx.request.body
        // 判断两次输入的密码是否一致
        if(password != password2){
            ctx.body = {
                code:2,
                message:'请输入相同的密码!'
            }
        }else{
            let user = new User({
                username,
                password,
                token:createToken(this.username)
            })
            let doc = await User.findOne({username})
            if(doc){
                ctx.body = {
                    code:1,
                    message:'用户名已存在'
                }
            }else{
                let id = uuid()
                user.id = id
                await new Promise(((resolve, reject) => {
                    user.save(err => {
                        if (err){
                            reject(err)
                        }
                        resolve()
                    })
                }))
                ctx.body = {
                    code:0,
                    message:'注册成功',
                    token: user.token
                }
            }
        }

    })

module.exports = router.routes()