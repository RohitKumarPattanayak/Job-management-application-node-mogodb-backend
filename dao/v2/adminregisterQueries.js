import User from "../../models/userModel.js";
import Jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { jwtSecret } from "../../utils/constants.js";

export const post_register_admin = (name, email, password) => {
  let user = new User({
    name,
    email,
    password,
    role: "admin",
  });
  return user;
};
