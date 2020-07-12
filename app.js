const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser')
const indexRoute = require('./routes/index');
const cors = require('koa2-cors');

const app = new Koa();
const router = new Router();

app.use(cors({
    origin: function(ctx) {
        if (ctx.url === '/test') {
            return false;
        }
        // return '*'; / 允许来自所有域名请求
        return 'http://localhost:8080'; // 这样就能只允许 http://localhost:8080 这个域名的请求了
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

app.use(bodyParser());
// routes
router.use(indexRoute.routes(), indexRoute.allowedMethods());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log('*** app start at port 3000 ***> ');
});
