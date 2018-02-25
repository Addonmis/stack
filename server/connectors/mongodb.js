import mongoose from "mongoose";

import { MONGO_URI } from "../configs";

mongoose.Promise = Promise;

async function mongo_connector(){
    if (!MONGO_URI){
        throw Error("mongo uri is not defined");
    }
    
    return mongoose
        .connect(MONGO_URI).then((mongodb) => {
            console.log("mongo connect"); 
            return mongodb
        })
};

export default mongo_connector;