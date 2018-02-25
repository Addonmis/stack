import bodyParser from "koa-bodyparser";

import check_token from "./check_token";

export default (app) => {
    app.use(bodyParser());
    app.use(check_token());
};