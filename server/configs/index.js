import dotenv from "dotenv";

dotenv.config();

const ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;
const SECRET = process.env.SECRET;

export { ENV, PORT, MONGO_URI, SECRET }