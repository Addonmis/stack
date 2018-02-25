import Koa from "koa";

import connectors from "./connectors";
import middlewares from "./middlewares";
import modules from "./modules";

connectors();

const app = new Koa();

middlewares(app);
app.use(modules);

app.use(async ctx => {
    ctx.body = "t";
});

export default app;