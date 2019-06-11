const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser');

const app = new Koa()
const router = new Router()
app.use(bodyParser());

const register = require('./routes/register')
const login = require('./routes/login')
const logout = require('./routes/logout')


router.use("/register",register);
router.use("/login",login);
router.use("/logout",logout);
app.use(router.routes()).use(router.allowedMethods());
app.listen(8888)