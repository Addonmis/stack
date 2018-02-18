import Mariadb from "mariasql-promise";

const maria = new Mariadb();

maria.connect({
    host: "localhost",
    user: "root",
    password: "root",
    db: "stack"
}).then(() => {
    console.log("connected to maria");
});

export default maria;