import { maria } from "../connectors";
import jwt from "jsonwebtoken";

import { SECRET } from "../configs/index";

export default () => async(ctx, next) => {
    const {authorization} = ctx.headers;
    
    if (authorization){
        try{
            const {_id} = await jwt.verify(authorization, SECRET);

            ctx.state.user = await maria.query("select id_user, username, id_role from users where id_user = ?", [_id]).then((row) => row);
        } catch(e){
            ctx.throw(401, {
                message: "unauthorized, invalid token"
            });
        }
    }
    
    await next();
};