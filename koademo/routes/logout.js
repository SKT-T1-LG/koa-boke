const router = require('koa-router')();


const User = require('../db/db.js').User

router
    .post('/', async ctx => {
        const {id} = ctx.request.body
        await new Promise(((resolve, reject) => {
            User.findOne({id}, (err, doc) => {
                if (err) {
                    reject(err)
                }
                resolve(doc)
            })
        })).then(res => {
            console.log(res);
            if(res){
                ctx.body = {
                    code:0,
                    message:'注销成功'
                }
            }else{
                ctx.body = {
                    code:1,
                    message:'注销失败'
                }
            }
        })

    })

module.exports = router.routes()