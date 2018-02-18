import Router from "koa-router";
import * as auth_controller from "./controllers/auth";

const router = new Router({prefix: "/auth"});

router
    .post("/signin", auth_controller.sign_in)
    .post("/signup", auth_controller.sign_up)

export default router.routes();