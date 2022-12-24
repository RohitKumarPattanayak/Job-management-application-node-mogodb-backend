import jwt from "jsonwebtoken";
import { jwtSecret } from "../utils/constants.js";

const auth = (req, res, next) => {
  //get the token out of the request header
  const token = req.header("x-auth-token");
  //check if the token exists
  if (!token) {
    //401 is auth denied
    return res.status(401).json({ message: "Authorization denied" });
  }
  try {
    //verify whether the tokens are from the same session
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded.user;
    //next allows to continue to the main route after the middleware
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default auth;
