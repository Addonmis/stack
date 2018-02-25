import app from "./app";
import { PORT } from "./configs/index";

const server = app.listen(PORT, err => {
    if (err) console.log(err);
    console.log(`server running on: ${PORT}`);
});

export default server;