import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const connectionURI = process.env.MONGOURI;
export const jwtSecret = process.env.JWT_SECRET;
