import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;
const SECRET = process.env.SECRET;

export { PORT, MONGO_URI, SECRET }