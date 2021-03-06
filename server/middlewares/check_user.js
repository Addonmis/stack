export default () => async(ctx, next) => {
    if (!ctx.state.user){
        ctx.throw(403, {
            message: "forbidden"
        });
    }
    await next();
};