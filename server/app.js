import Koa from "koa";
import bodyParser from "koa-bodyparser";

import modules from "./modules";

const app = new Koa();

app.use(bodyParser());

app.use(modules);

app.use(async ctx => {
    ctx.body = "t";
});

export default app;