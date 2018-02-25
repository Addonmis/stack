import Mariadb from "mariasql-promise";

import { ENV } from "../configs";

let options = {};

if (ENV == "development"){
    options = {
        host: "localhost",
        user: "root",
        password: "root",
        db: "stack"
    };
}

const maria = new Mariadb();

async function maria_connector(){
    maria.connect(options).then(() => {
        console.log("connected to maria");
    });
};

export { maria };

export default maria_connector;