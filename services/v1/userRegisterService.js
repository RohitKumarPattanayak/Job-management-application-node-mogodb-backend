import {
  post_check_user_query,
  post_register_user_query,
} from "../../dao/v1/userRegisterQueries.js";
import { jwtSecret } from "../../utils/constants.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

export const post_register_user_service = async (req, res) => {
  let { name, email, password } = req.body;
  try {
    let user = await post_check_user_query(email);
    if (user) {
      return res
        .status(400)
        .json({ message: "User with that email already exists" });
    }

    //hashing the password
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    user = await post_register_user_query(name, email, password);

    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      jwtSecret,
      {
        expiresIn: 86400000,
      },
      (err, token) => {
        if (err) throw err;
        res.status(201).json({ token });
      }
    );
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
};
