import User from "../../models/userModel.js";
import Jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { jwtSecret } from "../../utils/constants.js";
import { post_register_admin } from "../../dao/v2/adminregisterQueries.js";
// import { post_register_admin } from "../../dao/v2/adminregisterQueries.js";

export const register_admin = async (req, res) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email: email });
  if (user) {
    return res.status(400).json({ Invalid: "Email already exists" });
  }

  user = post_register_admin(name, email, password);

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);

  //   await user.save();
  await User.create(user);

  const p_load = {
    user: {
      id: user.id,
    },
  };
  const token = Jwt.sign(p_load, jwtSecret, { expiresIn: 86400000 });

  return res
    .status(200)
    .json({ Message: "admin registered", Admin_token: token });
};
