import Koa from "koa";

const app = new Koa();

app.use(async ctx => {
    ctx.body = "t";
});

export default app;