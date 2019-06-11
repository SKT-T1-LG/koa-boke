const router = require('koa-router')();


const User = require('../db/db.js').User

router
    .post('/', async ctx => {
        const {username, password} = ctx.request.body
        if(password.trim() == ''){
            ctx.body = {
                code:2,
                message:'请输入密码!'
            }
        }else{
            let doc = await User.findOne({username})
            // let doc = await new Promise(((resolve, reject) => {
            //     User.findOne({username}, (err, docs) => {
            //         if(err){
            //             reject(err)
            //         }else {
            //             resolve(docs)
            //         }
            //     })
            // })).then((res) => {
            //     console.log(res);
            // })

            if(doc){
                if(doc.password != password){
                    ctx.body = {
                        code:1,
                        message:'密码错误!'
                    }
                }else {
                    ctx.body = {
                        code:0,
                        message:'登录成功!',
                        token:doc.token,
                        name:doc.username,
                        id:doc.id
                    }
                }
            }else {
                ctx.body = {
                    code:3,
                    message:'用户不存在!'
                }
            }
        }
    })

module.exports = router.routes()